# Build React 
FROM node:14 as stage
WORKDIR /app
COPY ./package.json .
RUN npm install
COPY . ./
RUN npm run build

# NGINX - TODO pick a version
FROM nginx:latest
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=stage /app/build .
# COPY ./default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]

