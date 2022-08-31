FROM node:16.16.0

WORKDIR /app

COPY package.json ./

RUN npm i -g @nestjs/cli

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:dev"]

# Language: docker-compose.yml
# Path: docker-compose.yml
