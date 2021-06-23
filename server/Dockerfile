FROM node:12

# Creating our workdir
WORKDIR /nextserver

COPY package*.json ./

RUN yarn install --network-timeout=30000

COPY . .

RUN yarn build

EXPOSE 3000
CMD [ "node", "dist/main.js"]