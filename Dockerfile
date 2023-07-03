# Этап 1: Сборка приложения в development среде
FROM node:20 AS development
RUN npm install -g nodemon #для debug
WORKDIR /usr/src/app
COPY package*.json ./
COPY prisma ./prisma/
RUN npm cache clean --force
RUN npm install
COPY . .
RUN npm run build
# добавляем копирование директории prisma

# Этап 2: Запуск приложения в production  среде
FROM node:20 AS production
WORKDIR /usr/src/app
COPY --from=development /usr/src/app/dist ./dist
COPY --from=development /usr/src/app/prisma ./prisma
COPY package*.json ./
RUN npm install --only=production
RUN rm package*.json
EXPOSE 3000
CMD [  "npm", "run", "start:migrate:prod" ]
#CMD ["node", "dist/main.js"]