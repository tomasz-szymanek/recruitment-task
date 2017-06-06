FROM node:8.0.0

COPY . /app
WORKDIR /app
RUN npm install

ENTRYPOINT npm start
