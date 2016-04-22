#!/bin/bash

while [[ $# > 1 ]]
do
key="$1"

case $key in
    -credential)
    credential="$2"
    shift # past argument
    ;;
    -baseurl)
    baseurl="$2"
    shift # past argument
    ;;
    -directory)
    directory="$2"
    shift # past argument
    ;;
    *)
    shift        # unknown option
    ;;
esac

done

if [ -z ${directory+x} ]; then
  echo "-directory parameter must be set"
  exit 1
fi

if [ -z ${baseurl+x} ]; then
  echo "-baseurl parameter must be set"
  exit 1
fi
echo $directory $credential $baseurl

cp -r /srv/data/loopback $directory

cd $directory && node . cityscope-credential=$credential loopback-custom-base-url=$baseurl
