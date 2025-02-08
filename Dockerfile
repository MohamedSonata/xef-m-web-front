# Use the official Node.js image as the base image for building
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Use a smaller image for production
FROM node:18-alpine AS runner

# Set the working directory
WORKDIR /app

# Create content directory
# RUN mkdir -p src/content/docs/

# Copy content directory from builder


# Copy only necessary files from the builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]

ENV NEXT_STATIC_GENERATION_TIMEOUT=300 