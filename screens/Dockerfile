FROM node:8-alpine as builder

RUN npm install -g bower && apk add -U git

WORKDIR /app
ADD srcomp-screens .

#Fix for bower in a git submodule
RUN rm .git
RUN git init

RUN bower install --allow-root

FROM halverneus/static-file-server

COPY --from=builder /app /web
ADD config.json /web
ADD index.html /web
