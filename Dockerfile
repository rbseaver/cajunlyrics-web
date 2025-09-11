FROM node:20

WORKDIR /usr/src/app

# Update system packages to reduce vulnerabilities
RUN apt-get update && apt-get upgrade -y && apt-get clean

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["node", "dist/main.js"]