FROM node:18.12.1
ARG VITE_BASE_URL
ENV VITE_BASE_URL=$VITE_BASE_URL
WORKDIR /app
COPY package.json .
RUN npm install
RUN npm i -g serve
COPY . .
RUN npm run build
EXPOSE 3000
CMD [ "serve", "-s" , "dist"]