# cityscope-loopback-docker
Docker image for running Edinburgh CityScope loopback instances

#Loopback Usage
Loopback is set up under /loopback.

cityscope loopback is modified to look for two optional parameters, cityscope-credential, and loopback-custom-base-url.

##cityscope-credential

This parameter, if set sets up a cityscope-user account in loopback and sets the password to the passed in credential. It also creates an admin role and grants the role to the user.

##loopback-custom-base-url
This sets both the base url for explorer and api

##Data importer

A script cityscope-data-importer.js exists which can read a remote dcat compliant JSON file and then load in any importable repositories. It can be run as follows (assuming you are running from the root directory of this repo):

```
node cityscope-data-importer.js dcat-data-url=<path to dcat json>
```

For example:
```
node cityscope-data-importer.js dcat-data-url=https://raw.githubusercontent.com/EdinburghCityScope/uoe-campus-maps/api017/data.json
```

The script will only be able to import datasets for which there is an appropriate loopback model available which it can convert the data to.

#Docker Usage

##Running the container

Firstly pull the docker image:
```
docker pull cityscope/cityscope-loopback
```

Then you can run it as per the following:
```
docker run -t --name=loopback-romandgood romandgood/cityscope-loopback -credential <admin user credential to set> -baseurl <api base url to set> -directory <directory to run from>
```

For example:
```
docker run -t cityscope/cityscope-loopback -credential change1t -baseurl /test -directory /data/loopback
```

##Importing a cityscope dataset

You can import a dataset into loopback

```
docker exec -it <container name> /usr/local/bin/node <path to loopback>/cityscope-data-starter.js dcat-data-url=<path to cityscope repository data.json file>
```

For example:

```
docker exec -it loopback-romandgood /user/local/bin/node /data/loopback/cityscope-data-starter.js dcat-data-url=https://raw.githubusercontent.com/EdinburghCityScope/uoe-campus-maps/api017/data.json
```
