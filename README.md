# cityscope-loopback-docker
Docker image for running Edinburgh CityScope loopback instances

#Usage

Firstly pull the docker image:
```
docker pull romandgood/cityscope-loopback
```

Then you can run it as per the following:
```
docker run -t romandgood/cityscope-loopback -credential <admin user credential to set> -baseurl <api base url to set> -directory <directory to run from>
```

For example:
```
docker run -t romandgood/cityscope-loopback -credential change1t -baseurl /test -directory /data/loopback
```
