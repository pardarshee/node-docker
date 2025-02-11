# Use official Node.js image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --omit=dev

# Copy the rest of the app files
COPY . .

# Expose the port your app runs on
EXPOSE 6000

# Start the application
CMD ["node", "index.js"]
