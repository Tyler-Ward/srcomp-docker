FROM node:8-alpine

WORKDIR /app

ADD nwatchlive/package*.json .

RUN npm install

ADD nwatchlive/ ./
ADD comp-services.js .

EXPOSE 80
CMD ["node", "main.js", "--port=80", "--quiet", "comp-services.js", "services.default.js"]
