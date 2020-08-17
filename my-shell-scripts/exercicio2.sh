#!/bin/bash

read -p "Informe o arquivo: " ARQUIVO
FILEPATH=$(pwd)
CAMINHO=$FILEPATH"/"$ARQUIVO 

if [ -e $CAMINHO ]
then
    echo "O caminho $CAMINHO está habilitado"
fi

if [ -w $CAMINHO ]
then
    echo "Você tem permissão para editar $CAMINHO"
else
    echo "Você não foi autorizado a editar $CAMINHO"
fi