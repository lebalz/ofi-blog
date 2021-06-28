#!/usr/bin/env bash

usage="usage: ./zipit.sh path/to/zipping/file"

ZIP_DIR=$1
FOLDER=$(basename "$ZIP_DIR")

(cd $ZIP_DIR && zip -r $FOLDER.zip . -x ".*" -x "__MACOSX" && mv $FOLDER.zip ../$FOLDER.zip)
