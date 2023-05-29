FROM mcr.microsoft.com/playwright:v1.34.0-jammy

WORKDIR /app

COPY package.json .

RUN npm install

CMD ["npx", "playwright", "test"]
