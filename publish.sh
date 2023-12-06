#!/bin/bash

QUOTE=$(curl -s https://api.quotable.io/random | jq -r '.content')
# Define the path to your package.json file
PACKAGE_JSON_PATH="./package.json"

# Read the current version from package.json
current_version=$(jq -r '.version' "$PACKAGE_JSON_PATH")


# Increment the version (assuming semantic versioning)
IFS='.' read -r major minor patch <<<"$current_version"

if [ "$patch" -lt 9 ]; then
    new_version="$major.$minor.$((patch + 1))"
elif [ "$minor" -eq 9 ]; then
    new_version="$((major + 1)).0.0"
else
    new_version="$major.$((minor + 1)).0"
fi

# Update the version in package.json
jq ".version = \"$new_version\"" "$PACKAGE_JSON_PATH" > "$PACKAGE_JSON_PATH.tmp"
mv "$PACKAGE_JSON_PATH.tmp" "$PACKAGE_JSON_PATH"

echo "Version changed: from ${current_version} to ${new_version}";

echo "Starting build"

./buildall.sh

echo "Build Over"


echo "Git push and npm publish"

almighty-push main "$QUOTE" && npm publish
