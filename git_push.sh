#!/bin/bash

echo "Введите сообщение для коммита"

read Name

git add .
git status

git commit -m "$Name"

echo "Введите ветку"

read Branch
git push origin $Branch
