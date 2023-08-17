FROM node:18

RUN mkdir -p /home/app

COPY package*.json ./

RUN npm install -g pnpm

RUN pnpm install

COPY . /home/app

EXPOSE 5173

CMD ["pnpm", "start"] 