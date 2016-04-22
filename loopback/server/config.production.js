'use strict';

var customBaseUrl='';
process.argv.forEach(function(element){
  var valueArray = element.split('=');
  if (valueArray[0]='loopback-custom-base-url')
  {
    customBaseUrl=valueArray[1];
  }
});

console.log('Custom api route set to: '+customBaseUrl+'/api');
module.exports = {

  restApiRoot: customBaseUrl+"/api"

};
