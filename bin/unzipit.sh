#!/usr/bin/env bash

# https://stackoverflow.com/a/29920087

set -e

usage="usage: ./unzipit.sh path/to/folder"

DIR=$1

cd $DIR

for i in *.zip; do
  newdir="${i:0:-4}" && mkdir "$newdir"
  unzip "$i" -d  "$newdir"
done