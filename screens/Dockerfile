FROM node:8-alpine as builder

RUN npm install -g bower && apk add -U git

WORKDIR /app
ADD srcomp-screens .

RUN bower install --allow-root

FROM halverneus/static-file-server

COPY --from=builder /app /web
ADD config.json /web
ADD index.html /web
