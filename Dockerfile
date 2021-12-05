FROM node:14
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
RUN mv dist ../
EXPOSE 5000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]