var path = require('path');
var appDir = path.dirname(require.main.filename);
if (require.main.filename.indexOf("cityscope-data-starter")!=-1)
{
  appSuffix = "/loopback/data/loopback-data.json";
}
else {
  appSuffix="/../data/loopback-data.json";
}
module.exports={

  db: {
    connector: 'memory',
    file: appDir+appSuffix,
  }
};
