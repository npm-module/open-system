#! /usr/bin/env bash
set -uvx
set -e
deno run --allow-all ./app-deno.js a b "c d"
rm -rf node_modules
npm install
node ./app-require.js a b "c d"
node ./app-import.mjs a b "c d"
