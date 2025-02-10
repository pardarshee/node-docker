# Use an official Node.js runtime as the base image
FROM node:20-alpine

# Install curl for health checks
RUN apk add --no-cache curl

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker's caching
COPY package*.json ./

# Install dependencies
RUN npm install --omit=dev

# Copy the rest of the application files
COPY . .

# Expose the port (Coolify/Docker can override)
ARG PORT=4000
EXPOSE $PORT

# Set environment variables for Coolify
ENV NODE_ENV=production

# Start the application dynamically
CMD ["sh", "-c", "node server.js"]
