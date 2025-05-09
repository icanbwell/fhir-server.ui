FROM node:20.19.1-bookworm-slim

# Set the working directory inside the container
RUN mkdir -p /app && chown node:node /app
WORKDIR /app

# Setting user as node and not using root user for security purpose
USER node

# Copy package.json to the working directory
COPY --chown=node:node package.json .
COPY --chown=node:node yarn.lock .

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application files to the working directory
COPY --chown=node:node . .

# Expose port
EXPOSE 5051

# this gets replaced by the command in docker-compose
CMD ["tail", "-f", "/dev/null"]
