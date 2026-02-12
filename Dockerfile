FROM node:22-alpine
WORKDIR /ecommerce
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8888 
CMD ["npm", "start"]



