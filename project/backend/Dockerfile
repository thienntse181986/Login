FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Sinh Prisma Client khi build
RUN npx prisma generate

CMD ["npm", "start"]
