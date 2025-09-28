#  user  vesion using

FROM node:24



# Starting point
WORKDIR /app

# Copy package.jason
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of our app into the container
COPY . .

# Set port environment variable
ENV PORT=9000
# Expose the port so our computer can access it
EXPOSE 9000

# Run the app
CMD ["npm", "start"]     