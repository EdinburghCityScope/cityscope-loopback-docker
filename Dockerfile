# LoopBack App Base Image
# Installs StrongLoop and Git
FROM node:latest

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

#RUN useradd -m docker && echo "docker:docker" | chpasswd && adduser docker sudo

#USER docker

#Installing Loopback
RUN sudo npm install -g strongloop

# Setup Git
#RUN git config --global user.name "your username" && \
#		git config --global user.email "your email"

EXPOSE 3000

ENTRYPOINT ["/data/cityscope/loopback/startup.sh"]
