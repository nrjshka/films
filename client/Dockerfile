FROM node:14.17.1 as build_films

WORKDIR /films

COPY package*.json ./

RUN yarn install --network-timeout=30000


COPY . .

# Hack with solving vite
# RUN node node_modules/esbuild/install.js

RUN yarn build

# production env
FROM nginx:stable-alpine
COPY --from=build_films /films/build /usr/share/nginx/html

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
