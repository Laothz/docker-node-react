FROM node:12.14.1

WORKDIR /var/html/www/site
COPY package.json .
RUN npm install

COPY . .
CMD ["npm", "start"]