FROM node:alpine

WORKDIR /github.com/go-jedi/portfolio/frontend/

COPY . /github.com/go-jedi/portfolio/frontend/

COPY .env.local /github.com/go-jedi/portfolio/frontend/

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]