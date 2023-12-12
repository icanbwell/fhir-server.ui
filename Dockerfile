FROM node:18.17.1-bookworm-slim as build_react
# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production

# update npm
RUN npm install -g npm@9.8.1 && npm upgrade --global yarn

RUN mkdir /srv/src
COPY package.json /srv/src/package.json
COPY yarn.lock /srv/src/yarn.lock
COPY tsconfig.json /srv/src/tsconfig.json
COPY babel.config.json /srv/src/babel.config.json
COPY src/ /srv/src/src/

RUN echo "$NODE_ENV"
RUN if [ "$NODE_ENV" = "development" ] ; then echo 'building development' && cd /srv/src && yarn install --no-optional; else echo 'building production' && cd /srv/src && yarn cache clean && yarn config delete proxy && yarn config delete https-proxy && yarn config delete registry && yarn install --no-optional --production=true --network-timeout 1000000; fi
RUN cd /srv/src && npm run build_react

FROM node:18.17.1-bookworm-slim as build_node
# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production

RUN mkdir /srv/src
COPY package.json /srv/src/package.json
COPY yarn.lock /srv/src/yarn.lock
COPY tsconfig.json /srv/src/tsconfig.json
COPY babel.config.json /srv/src/babel.config.json
COPY src/ /srv/src/src/
RUN cd srv/src && rm -r src/config && rm -r src/scripts && rm -r src/src && rm -r src/public && rm -r src/tests

# copy node_modules from react_build to avoid downloading node_modules again
COPY --from=build_react srv/src/node_modules srv/src/node_modules

RUN cd /srv/src && npm run build

FROM node:18.17.1-bookworm-slim
# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production

# Update everything on the OS
RUN apt-get -y update && apt-get -y upgrade && apt-get -y --no-install-recommends install curl && apt-get clean

# Set the working directory
RUN mkdir -p /srv/src && chown node:node /srv/src
WORKDIR /srv/src

# Copy our package.json & yarn.lock
USER node
COPY --chown=node:node package.json /srv/src/package.json
COPY --chown=node:node yarn.lock /srv/src/yarn.lock

# Copy code from multi-stage build above
COPY --from=build_react /srv/src/build /srv/src/build
COPY --from=build_react /srv/src/node_modules /srv/src/node_modules
COPY --from=build_node /srv/src/dist /srv/src/dist

# this gets replaced by the command in docker-compose
CMD ["tail", "-f", "/dev/null"]
