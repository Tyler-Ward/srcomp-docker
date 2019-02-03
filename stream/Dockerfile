FROM node:8-alpine

WORKDIR /app

COPY srcomp-stream/package*.json .

RUN npm install

COPY srcomp-stream/ ./

EXPOSE 5001
CMD ["node", "main.js"]
