FROM node:13.12.0-alpine as build

WORKDIR /usr/src/client

COPY package*.json ./

RUN npm install

COPY . .

RUN npm build

# production env
FROM nginx:stable-alpine
COPY --from=build /usr/src/client/dist /usr/share/nginx/html

# COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]