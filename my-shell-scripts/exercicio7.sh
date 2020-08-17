#!/bin/bash

#read -p "Entre diretório ou arquivo: " NOME

if [ -d $1 ]
then
    I=$(ls -la $1 | grep "^-" | wc -l)
    echo "O $1 tem $I arquivos"
else
    echo "O argumento $1 não é um diretório"
fi