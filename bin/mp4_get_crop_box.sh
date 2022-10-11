#!/usr/bin/env bash

set -e

usage="usage: ./mp4_get_crop_box.sh path/to/movie.mp4"

MP4=$1

ffmpeg -ss 10 -i $MP4 -vframes 10 -vf cropdetect -f null - # show possible crop param