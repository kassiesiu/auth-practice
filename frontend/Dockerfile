# Build React 
FROM node:14 as frontend_stage
WORKDIR /app
COPY ./package.json .
RUN npm install
COPY . ./
RUN npm run build

# NGINX - TODO pick a version
FROM nginx:latest
WORKDIR /etc/nginx/html
RUN rm -rf ./*
COPY --from=frontend_stage /app/build .
COPY ./default.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
ENTRYPOINT ["nginx", "-g", "daemon off;"]