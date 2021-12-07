FROM node:14
ARG REACT_APP_HOST
ENV NODE_ENV=production
ENV REACT_APP_HOST=$REACT_APP_HOST
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --production=false
COPY . .
RUN npm run build
EXPOSE 5000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]