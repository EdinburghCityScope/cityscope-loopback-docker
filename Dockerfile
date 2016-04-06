# LoopBack App Base Image
# Installs StrongLoop and Git
FROM node:latest

# Create base directories
RUN mkdir /data
RUN mkdir /data/cityscope
RUN mkdir /data/cityscope/loopback
WORKDIR /data/cityscope/loopback
ADD . /data/cityscope/loopback
RUN chmod +x /data/cityscope/loopback/startup.sh

# Installing Git
RUN mkdir /data/git-tmp
WORKDIR /data/git-tmp

RUN apt-get update
RUN apt-get -y install sudo
RUN apt-get -y install git

#Installing Loopback
RUN sudo npm install -g strongloop

# Expose standard loopback port
EXPOSE 3000

#Add base entrypoint
ENTRYPOINT ["/data/cityscope/loopback/startup.sh"]
