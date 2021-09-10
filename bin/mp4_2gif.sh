#!/usr/bin/env bash

set -e

usage="usage: ./mp4_t2gif.sh path/to/movie.mov"

MP4=$1
SKIP=0

CONVERTED=${MP4//\.mp4/\.gif}

ffmpeg -i $MP4 -ss $SKIP -vf "fps=10,scale=960:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0 $CONVERTED
