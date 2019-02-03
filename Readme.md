# Docker build tools for srcomp

Builds a set of docker images for srcomp
Curentley connects via traefik but can use direct port 80 access if required

## Build steps

```
git submodudle init
git submodule update
docker-compose build
docker-compose start
```
