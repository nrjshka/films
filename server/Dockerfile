FROM node:12

# Creating our workdir
WORKDIR /usr/src/nextserver

COPY package*.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000
CMD [ "node", "dist/main.js"]