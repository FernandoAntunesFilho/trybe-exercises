#!/bin/bash

DATA=$(date +%Y-%m-%d)

for I in $(ls *.png); do
    mv $I $DATA'-'$I
done

ls *.png