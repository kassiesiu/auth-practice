FROM node:14.18.0
WORKDIR /usr/src/app
COPY package*.json .
RUN yarn install
COPY . .
EXPOSE 8081
# TODO run with prod commands
CMD ["node", "index.js"]