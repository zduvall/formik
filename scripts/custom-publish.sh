#!/bin/bash
# Exit immediately on error, and treat unset variables as errors.
set -euo pipefail

# Color definitions.
GREEN="\033[0;32m"
YELLOW="\033[0;33m"
BLUE="\033[0;34m"
RED="\033[0;31m"
NC="\033[0m" # No Color

# Check that we are in a Git repository.
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo -e "${RED}[ERROR]${NC} Not inside a Git repository. Exiting."
  exit 1
fi

# Ensure a clean working directory.
if [ -n "$(git status --porcelain)" ]; then
  echo -e "${RED}[ERROR]${NC} Working directory is not clean. Please commit or stash your changes."
  exit 1
fi

# Save the current branch name.
CURRENT_BRANCH=$(git symbolic-ref --short HEAD)
echo -e "${BLUE}[INFO]${NC} Current branch: ${GREEN}${CURRENT_BRANCH}${NC}"

# Create a temporary directory for the build output.
TMP_DIR=$(mktemp -d -t custom-build-XXXXXXXX)
echo -e "${BLUE}[INFO]${NC} Using temporary directory: ${GREEN}$TMP_DIR${NC}"

# Ensure the temporary directory is removed on exit.
function cleanup {
  echo -e "${YELLOW}[CLEANUP]${NC} Removing temporary directory..."
  rm -rf "$TMP_DIR"
}
trap cleanup EXIT

# Run the build.
echo -e "${BLUE}[BUILD]${NC} Running build..."
yarn build

# Verify the build output exists.
if [ ! -d "packages/formik" ]; then
  echo -e "${RED}[ERROR]${NC} Build output directory 'packages/formik' does not exist. Exiting."
  exit 1
fi

# Copy the built package to the temporary directory.
echo -e "${BLUE}[BUILD]${NC} Copying built package to temporary directory..."
cp -R packages/formik/. "$TMP_DIR/"

# Check if the custom-build branch exists. If yes, checkout; if not, create it.
if git rev-parse --verify custom-build >/dev/null 2>&1; then
  echo -e "${BLUE}[BRANCH]${NC} Branch 'custom-build' exists. Checking it out..."
  git checkout custom-build
else
  echo -e "${BLUE}[BRANCH]${NC} Branch 'custom-build' does not exist. Creating orphan branch..."
  git checkout --orphan custom-build
fi

# Remove all files from the branch.
echo -e "${BLUE}[BRANCH]${NC} Clearing files from 'custom-build' branch..."
git rm -rf . > /dev/null 2>&1 || true

# Copy the built files into the branch root.
echo -e "${BLUE}[DEPLOY]${NC} Copying built files to branch root..."
cp -R "$TMP_DIR/." .

# Stage and commit the changes.
echo -e "${BLUE}[DEPLOY]${NC} Staging files..."
git add .
echo -e "${BLUE}[DEPLOY]${NC} Committing build..."
git commit -m "Auto commit -- publish custom build"

# Force-push the branch to origin.
echo -e "${BLUE}[DEPLOY]${NC} Pushing 'custom-build' branch to origin..."
git push -f origin custom-build

# Switch back to the original branch.
echo -e "${BLUE}[BRANCH]${NC} Switching back to original branch: ${GREEN}${CURRENT_BRANCH}${NC}..."
git checkout "$CURRENT_BRANCH"

echo -e "${GREEN}[SUCCESS]${NC} Custom publish completed successfully!"
