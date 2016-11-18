var insertLoopbackData = require('./cityscope-data-importer').insertLoopbackData;
var edinburghcityscopeUtils = require('edinburghcityscope-utils');
var getModelUrlFromDcatInfo = edinburghcityscopeUtils.getModelUrlFromDcatInfo;
var getDataFromURL = edinburghcityscopeUtils.getDataFromURL;
var featureCollectionToFeatureArray = edinburghcityscopeUtils.featureCollectionToFeatureArray;

var dcatDataUrl='';
process.argv.forEach(function(element){

  var valueArray = element.split('=');

  if (valueArray[0]=='dcat-data-url') {
    dcatDataUrl=valueArray[1];
  }
});

if (dcatDataUrl=='')
{
  console.log('dcat-data-url not set, exiting.');

}
else {
 console.log('Data url is '+dcatDataUrl);
 console.log('Getting dcat data.');
 getDataFromURL(dcatDataUrl,function(error,callback){
   if (error)
   {
     throw error;
   }
   else {
     console.log('Got dcat data');
     console.log('Getting model and data information.');
     getModelUrlFromDcatInfo(callback,function(callback){
       var loopbackModel = callback.model;
       console.log('Model is '+callback.model);
       console.log('Data url is '+callback.datasetUrl);

       console.log('Getting data.');
       getDataFromURL(callback.datasetUrl,function(error,callback){
         if (error)
         {
           throw error;
         }
         else {
           if (loopbackModel=='GeoJSONFeature')
           {
             console.log('Got data, converting to feature array.');
             var json = featureCollectionToFeatureArray(callback);
             console.log('Conversion complete, importing.');
           }

           insertLoopbackData(loopbackModel,json);
           console.log('Import finished!');
         }

       });
     });
   }

 });

}
