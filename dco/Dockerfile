# Use the official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install NestJS dependencies
RUN npm install

# Copy the application code to the container
COPY . .

# Expose the port your NestJS application is running on
EXPOSE 3020

# Command to run your NestJS application
CMD ["npm", "run", "start:prod"]
