# Docker build tools for srcomp

Builds a set of docker images for srcomp
Curentley connects via traefik but can use direct port 80 access if required

## Build steps

```bash
git submodudle init
git submodule update
#download/setup a compsate folder
#adjust docker-compose file to point at comp repo
docker-compose build
docker-compose up -d
```
