#!/usr/bin/env bash
set -euo pipefail

folder="$1"
name="$2"

while true; do
  echo "--- Running $folder/$name.js ---"
  node "$folder/$name.js"
  echo "--- Finished. Press ENTER to rerun, Ctrl+C to quit ---"
  read || break
done
