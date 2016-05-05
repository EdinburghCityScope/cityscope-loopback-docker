# cityscope-loopback-docker
Docker image for running Edinburgh CityScope loopback instances

#Usage

##Running the container

Firstly pull the docker image:
```
docker pull romandgood/cityscope-loopback
```

Then you can run it as per the following:
```
docker run -t --name=loopback-romandgood romandgood/cityscope-loopback -credential <admin user credential to set> -baseurl <api base url to set> -directory <directory to run from>
```

For example:
```
docker run -t romandgood/cityscope-loopback -credential change1t -baseurl /test -directory /data/loopback
```

##Importing a cityscope dataset

You can import a dataset into a container

```
docker exec -it <container name> /usr/local/bin/node <path to loopback>/cityscope-data-starter.js dcat-data-url=<path to cityscope repository data.json file>
```

For example:

```
docker exec -it loopback-romandgood /user/local/bin/node /data/loopback/cityscope-data-starter.js dcat-data-url=https://raw.githubusercontent.com/EdinburghCityScope/uoe-campus-maps/api017/data.json
```
