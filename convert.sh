#!/usr/bin/env bash

for filename in *.xcf; do
    basename="${filename%.*}"
    xcf2png "$filename" -o "$basename".png
done
