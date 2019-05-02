FROM node:8
# Create app directory
WORKDIR /example1

RUN npm install
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]

