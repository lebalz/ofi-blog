#!/usr/bin/env bash

set -e

usage="usage: ./mute-mp4.sh path/to/movie.mp4"

VID=$1
MUTED=${VID//\.mp4/-muted\.mp4}

ffmpeg -i $VID -vcodec copy -an $MUTED

