FROM node:10-alpine
COPY package.json .
RUN npm i
COPY . .
CMD [ "node", "index.js" ]