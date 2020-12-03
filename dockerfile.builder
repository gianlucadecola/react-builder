FROM node:alpine

RUN yarn create react-app app
WORKDIR app
