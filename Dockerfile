# Stage 1: Build the React Application
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy source code
COPY . .

# Build the React application
RUN npm run build

# Stage 2: Serve with Express
FROM node:18-alpine

WORKDIR /app

# Create a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy package files for backend dependencies
COPY package.json package-lock.json ./

# Install production dependencies only (includes express)
RUN npm ci --only=production

# Copy built frontend assets from builder stage
COPY --from=builder /app/dist ./dist

# Copy server code
COPY server.js ./

# Set ownership to non-root user
RUN chown -R appuser:appgroup /app

# Switch to non-root user
USER appuser

# Expose the application port (documentation only, actual port is dynamic)
EXPOSE 3000

# Requirement: Read listening port from environment variable
# Requirement: Fail clearly if port is not set (handled in server.js)
# We default to 3000 in the ENV instruction for documentation, 
# but the app requires it to be set.
ENV PORT=3000

# Run the app
CMD ["node", "server.js"]
