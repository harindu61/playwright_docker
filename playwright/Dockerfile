FROM mcr.microsoft.com/playwright:v1.34.0-jammy

RUN apt-get update && apt-get install -y openjdk-11-jdk

ENV PATH $PATH:$JAVA_HOME/bin

COPY . /app

WORKDIR /app

COPY package.json .

RUN npm install

CMD ["npx", "playwright", "test"]
