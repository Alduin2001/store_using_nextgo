#!/bin/bash

echo "Введите сообщение для коммита"

read Name

echo "Введите ветку"

read Branch

git add .
git status

git commit -m "$Name"

git push origin $Branch