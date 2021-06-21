FROM node:13.12.0-alpine as build

WORKDIR /builddir

COPY package*.json ./

RUN npm install

COPY . .

RUN npm build

# production env
FROM nginx:stable-alpine
COPY --from=build /builddir/dist /usr/share/nginx/html

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]