var loopback = require('loopback');
var boot = require('loopback-boot');
var explorer = require('loopback-component-explorer');
var path = require('path');

var app = module.exports = loopback();


//app.use(customBaseUrl+'/explorer', loopback.rest());

app.start = function() {
  // start the web server

  var customBaseUrl='';
  process.argv.forEach(function(element){
    var valueArray = element.split('=');
    if (valueArray[0] === 'loopback-custom-base-url')
    {
      customBaseUrl=valueArray[1];
    }
  });
  console.log('Setting explorer mount point to: '+customBaseUrl+'/explorer');

  app.use(customBaseUrl+'/explorer', explorer.routes(app, {
    basePath: customBaseUrl+'/api',
    uiDirs: [
      path.resolve(__dirname, 'public')
    ]
  }));
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
