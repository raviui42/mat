FROM node:12.7-alpine AS build

RUN mkdir /app
WORKDIR /app
COPY . .

ARG environment

RUN echo $environment

RUN npm install -g webpack
RUN npm install node-sass@4.13.1
RUN npm install
RUN npm run build

EXPOSE 3008

CMD sh ./deploy/commands.sh
