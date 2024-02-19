FROM node:18.17.0-alpine as development

WORKDIR /usr/src/app

COPY package*.json ./

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install

COPY . ./

RUN npm run prebuild && npm run build 

FROM node:18.17.0-alpine as production

WORKDIR /usr/src/app

COPY --from=development /usr/src/app/dist ./dist
COPY --from=development /usr/src/app/package*.json ./

RUN npm ci --production

CMD ["node", "dist/main.js"]