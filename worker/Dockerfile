FROM node:0.10

MAINTAINER Matthias Luebken, matthias@catalyst-zero.com

# Install build-essential for compiliation purposes
RUN apt-get update -qq && apt-get install -y build-essential

WORKDIR /home/dionysus-worker

RUN npm install -g nodemon

# Install packages
ADD package.json /home/dionysus-worker/package.json
RUN npm install

# Make everything available for start
ADD . /home/dionysus-worker

# Set development environment as default
ENV NODE_ENV development

# Port 9090 for server
EXPOSE 9090

CMD ["nodemon", "app.js"]