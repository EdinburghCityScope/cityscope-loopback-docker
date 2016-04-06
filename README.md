# cityscope-loopback-docker
Docker image for running Edinburgh CityScope loopback instances

#Usage

Firstly pull the docker image:
```
docker pull romandgood/cityscope-loopback
```

Then you can run it as per the following:
```
docker run -t romandgood/cityscope-loopback <repository_url> <directory to store repo>
```

For example:
```
docker run -t romandgood/cityscope-loopback https://github.com/EdinburghCityScope/uoe-campus-maps.git /data/cityscope/loopback/uoe-campus-maps
```


