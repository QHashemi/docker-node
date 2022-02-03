#Start Node version:15
FROM node:15

#Set Working Directory
WORKDIR /app

#Copy package.json in to app folder
COPY package.json ./

# Run the command to install express or ...
RUN npm install

#Copy everything from current dircetory to App directory
COPY ./ ./

# It will set envirment Variable
ENV PORT 5000
EXPOSE  $PORT

# Expose is just for documention purpose
EXPOSE 5000

## Run the app
##CMD ["node","index.js"]

# After installing nodemon
CMD ["npm","run", "dev"]

