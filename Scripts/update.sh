#!/usr/bin/env sh
set -e

BRANCH=${1:-main}

echo "Pulling latest changes from $BRANCH branch"
git fetch origin
git checkout "$BRANCH"
git pull

echo "Installing dependencies..."
pnpm i

echo "Your $BRANCH" is updated