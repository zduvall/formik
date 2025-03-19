#!/bin/bash
# Exit immediately on error, and treat unset variables as errors.
set -euo pipefail

# Color definitions.
GREEN="\033[0;32m"
YELLOW="\033[0;33m"
BLUE="\033[0;34m"
RED="\033[0;31m"
NC="\033[0m" # No Color

# Custom echo function to add newlines before and after the string.
custom_echo() {
  echo -e "\n$1\n"
}

# Check that we are in a Git repository.
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  custom_echo "${RED}[ERROR]${NC} Not inside a Git repository. Exiting."
  exit 1
fi

# Ensure a clean working directory.
if [ -n "$(git status --porcelain)" ]; then
  custom_echo "${RED}[ERROR]${NC} Working directory is not clean. Please commit or stash your changes."
  exit 1
fi

# Save the current branch name.
ORIGINAL_BRANCH=$(git symbolic-ref --short HEAD)
custom_echo "${BLUE}[INFO]${NC} Current branch: ${GREEN}${ORIGINAL_BRANCH}${NC}"

# Create a temporary directory for the build output.
TMP_DIR=$(mktemp -d -t custom-build-XXXXXXXX)
custom_echo "${BLUE}[INFO]${NC} Using temporary directory: ${GREEN}$TMP_DIR${NC}"

# Ensure the branch is switched back and the temporary directory is removed on exit.
function cleanup {
  CURRENT=$(git symbolic-ref --short HEAD)
  if [ "$CURRENT" != "$ORIGINAL_BRANCH" ]; then
    custom_echo "${YELLOW}[CLEANUP]${NC} Switching back to original branch: ${GREEN}${ORIGINAL_BRANCH}${NC}..."
    git checkout "$ORIGINAL_BRANCH" || custom_echo "${RED}[ERROR]${NC} Failed to switch back to original branch."
  else
    custom_echo "${YELLOW}[CLEANUP]${NC} Already on the original branch: ${GREEN}${ORIGINAL_BRANCH}${NC}."
  fi

  custom_echo "${YELLOW}[CLEANUP]${NC} Removing temporary directory..."
  rm -rf "$TMP_DIR"
}
trap cleanup EXIT

# Run the build.
custom_echo "${BLUE}[BUILD]${NC} Running build..."
yarn build

# Verify the build output exists.
if [ ! -d "packages/formik" ]; then
  custom_echo "${RED}[ERROR]${NC} Build output directory 'packages/formik' does not exist. Exiting."
  exit 1
fi

# Copy the built package to the temporary directory.
custom_echo "${BLUE}[BUILD]${NC} Copying built package to temporary directory..."
# copy everything from the built package to the temporary directory
cp -R packages/formik/. "$TMP_DIR/"
# delete the node_modules/ and test/ directories in the temporary directory
rm -rf "$TMP_DIR/node_modules" "$TMP_DIR/test"

# Check if the custom-build branch exists. If yes, checkout; if not, create it.
if git rev-parse --verify custom-build >/dev/null 2>&1; then
  custom_echo "${BLUE}[BRANCH]${NC} Branch 'custom-build' exists. Checking it out..."
  git checkout custom-build
else
  custom_echo "${BLUE}[BRANCH]${NC} Branch 'custom-build' does not exist. Creating orphan branch..."
  git checkout --orphan custom-build
  # add an initial empty commit to the branch
  git commit --allow-empty -m "Initial commit"
fi

# Remove all files from the branch.
custom_echo "${BLUE}[BRANCH]${NC} Clearing files from 'custom-build' branch..."
git rm -rf . > /dev/null 2>&1 || true

# Copy the built files into the branch root.
custom_echo "${BLUE}[DEPLOY]${NC} Copying built files to branch root..."
cp -R "$TMP_DIR/." .

# Stage and commit the changes.
custom_echo "${BLUE}[DEPLOY]${NC} Staging files..."
git add .
# Use 'git add -f' to force-add files that are ignored by `.gitignore` -- particularly the `dist` directory
git add -f dist/
custom_echo "${BLUE}[DEPLOY]${NC} Committing build..."
git commit -m "Auto commit -- publish custom build"

# Force-push the branch to origin.
custom_echo "${BLUE}[DEPLOY]${NC} Pushing 'custom-build' branch to origin..."
git push -f origin custom-build

custom_echo "${GREEN}[SUCCESS]${NC} Custom publish completed successfully!"
