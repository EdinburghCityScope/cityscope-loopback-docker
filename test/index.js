var should = require('chai').should();
var expect = require('chai').expect;
var assert = require('chai').assert;
var loopback = require('loopback');
var cityscopeDataImporter = require('../scripts/cityscope-data-importer');
var app = require('../loopback/server/server');

var edinburghcityscopeUtils = require('edinburghcityscope-utils');
var featureCollectionToFeatureArray = edinburghcityscopeUtils.featureCollectionToFeatureArray;
var featureArrayToLoopbackJson = edinburghcityscopeUtils.featureArrayToLoopbackJson;
var insertLoopbackData = cityscopeDataImporter.insertLoopbackData;

var testFeatureCollection='{"type": "FeatureCollection","features": [{"type": "Feature","properties": {"name": "Test Name"},"geometry": {"type": "Point","coordinates": [-3.1952404975891113,55.94966839561511]}}]}';
var testEmptyFeatureCollection='{"type": "FeatureCollection","features": []}';
var expectedFeatureArray= [JSON.parse('{"type": "Feature","properties": {"name": "Test Name"},"geometry": {"type": "Point","coordinates": [-3.1952404975891113,55.94966839561511]}}')];
var testFeatureArray=[JSON.parse('{"type": "Feature","properties": {"name": "Test Name"},"geometry": {"type": "Point","coordinates": [-3.1952404975891113,55.94966839561511]}}')];
var testBadArray='{"type": "FeatureCollection","features": [ bad ]}';
var emptyArray=[];
var testInvalidJsonArray=[JSON.parse('{ "bad": "value"}')];

describe('#insertLoopbackData', function(){
  it('inserts model data into loopback', function(){
    insertLoopbackData('GeoJSONFeature',testFeatureArray);
  });

  it('throws error when model is invalid', function(){
    assert.throws(function(){insertLoopbackData("ModelDoesntExist",testFeatureArray),Error,'Model is invalid'});
  });

  it('throws validation error when data is invalid for model', function(){
    assert.throws(function(){insertLoopbackData('GeoJSONFeature',testInvalidJsonArray),ValidationError});
  });

});
