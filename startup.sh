#!/bin/bash
numArgs="$#"
secondLastArg="${@:(-2):1}"
lastArg="${!#}"
echo "Cloning $secondLastArg into $lastArg"

git clone $secondLastArg $lastArg
cd $lastArg && npm install
cd $lastArg && node .
