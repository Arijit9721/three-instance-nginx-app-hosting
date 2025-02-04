# set the parent image
FROM node:18-alpine

# create the working directory 
WORKDIR /app

# copy the needed files
COPY package.json ./
COPY . .

# run command to install npm
RUN npm install 

# expose the needed port
EXPOSE 3000

# run the command t/o start the server
CMD [ "node", "server.js" ]