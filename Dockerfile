
# uses version of node 24.9.0 

FROM node:24

# Starting point
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# install app dependencies 
RUN npm install 

# Copy the rest of our app into container
COPY . . 

# Set port environment variable 
ENV PORT=5173

# Expose the port so our computer can access it
EXPOSE 5173

# Run the app
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

