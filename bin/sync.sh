#!/bin/bash

rsync --exclude '.ipynb_checkpoints/' -a root@195.201.143.3:/srv/data/ofi24/ ./docs/skript