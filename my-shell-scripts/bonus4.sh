#!/bin/bash

DATA=$(date +%Y-%m-%d)
DIRETORIO=$1
EXTENSAO=$2

#echo $DATA
#echo $DIRETORIO
#echo $EXTENSAO

cd $DIRETORIO

for I in $(ls *.$EXTENSAO); do
    echo "Renomeando arquivo $I para $DATA-$I"
    mv $I $DATA'-'$I
#    sleep 1
done

#ls *.$EXTENSAO