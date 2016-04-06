# LoopBack App Base Image
# Installs StrongLoop and Git
FROM node:latest

# Create base directories
RUN mkdir /srv/cityscope
RUN mkdir /srv/cityscope/loopback
WORKDIR /srv/cityscope/loopback
ADD . /srv/cityscope/loopback
RUN chmod +x /srv/cityscope/loopback/startup.sh

# Installing Git
RUN mkdir /srv/git-tmp
WORKDIR /srv/git-tmp

RUN apt-get update
RUN apt-get -y install sudo
RUN apt-get -y install git

#Installing Loopback
RUN sudo npm install -g strongloop

# Expose standard loopback port
EXPOSE 3000

#Add base entrypoint
ENTRYPOINT ["/srv/cityscope/loopback/startup.sh"]
