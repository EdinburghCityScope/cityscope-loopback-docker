# LoopBack App Base Image
# Installs StrongLoop and Git
FROM node:latest

# Create base directories
RUN mkdir /srv/cityscope
RUN mkdir /srv/cityscope/loopback
WORKDIR /srv/cityscope/loopback
ADD . /srv/cityscope/loopback
RUN chmod +x /srv/cityscope/loopback/startup.sh

ENV NODE_ENV=production

#Installing Loopback
RUN cd /srv/cityscope/loopback && npm install

# Expose standard loopback port
EXPOSE 3000

#Add base entrypoint
ENTRYPOINT ["/srv/cityscope/loopback/startup.sh"]
