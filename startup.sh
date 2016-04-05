#!/bin/bash
git clone $1 $2
cd $2 && npm install
cd $2 && node .
