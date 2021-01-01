#!/usr/bin/env bash

for filepath in images/png/*.png; do
    filename="${filepath##*/}"
    basename="${filename%.*}"
    colorist convert "$filepath" --resize 800 images/avif/"$basename"-800.avif
    avifenc "$filepath" images/avif/"$basename".avif
done
