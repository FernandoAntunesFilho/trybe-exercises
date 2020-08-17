#!/bin/bash

read -p "Entre diretório ou arquivo: " NOME

if [ -f $NOME ]
then
    echo "É um arquivo comum"
elif [ -d $NOME ]
then
    echo "É um diretório"
else
    echo "É alguma outra coisa"
fi

ls -l $NOME