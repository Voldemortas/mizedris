#!/bin/bash
PASSWORD=`tr -dc 'A-Za-z0-9' </dev/urandom | head -c 20`
echo PASSWORD=$PASSWORD > .env
echo requirepass $PASSWORD > .tmp
cat redis-no-pass.conf >> .tmp
cp .tmp redis.conf
rm .tmp