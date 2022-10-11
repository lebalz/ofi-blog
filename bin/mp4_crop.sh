#!/usr/bin/env bash

set -e

# get the bounding box for the crop with ./mp4_get_crop_box.sh
usage="usage: ./mp4_crop.sh path/to/movie.mp4 1264:1072:328:4"

MP4=$1
CROP=$2
echo $CROP
CONVERTED=${MP4//\.mp4/-cropped\.mp4}

echo $CONVERTED
ffmpeg -i $MP4 -vf "crop=$CROP" $CONVERTED