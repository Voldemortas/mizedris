# Mizeris

**This is a project for a card game called Mizeris.**

----

## Before docker setup

```bash
./generate.sh
```
it will generate password for database

## Docker setup
```bash
screen -S "Docker Redis"
docker run --name redis `docker build . | awk '{print $NF}' | awk 'END{print}'`
```
to leave screen session with screen (docker container) still running:   
`CTRL`+`A` `CTRL`+`D`  
To return to screen:  
```bash
screen -r "Docker Redis"
```  
You can access Redis on `redis://password@172.17.0.2:6379`

----