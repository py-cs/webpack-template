FROM node:14
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --production=false
COPY . .
RUN npm run build
EXPOSE 5000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]