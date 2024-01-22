#! /usr/bin/env bash
set -uvx
set -e
cwd=`pwd`
ts=`date "+%Y.%m%d.%H%M%S"`
version=${ts}
sed -i -e "s/version [0-9]*[.][0-9]*[.][0-9]*/version ${ts}/g" mod.js
rm -rf ../npm-module
deno run --allow-all ./mk-npm.ts $ts
rm -rf $cwd/../npm-module/esm/tmp
rm -rf $cwd/../npm-module/script/tmp
cd $cwd/../npm-module
npm publish
