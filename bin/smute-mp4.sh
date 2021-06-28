#!/usr/bin/env bash

# mute video and substitute the original video with the muted one
set -e

usage="usage: ./smute-mp4.sh path/to/movie.mp4"

VID=$1
MUTED=${VID//\.mp4/-muted\.mp4}

ffmpeg -i $VID -vcodec copy -an $MUTED

rm -f $VID
mv $MUTED $VID