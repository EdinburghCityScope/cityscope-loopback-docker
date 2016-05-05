var path = require('path');
var appDir = path.dirname(require.main.filename);

module.exports={

  db: {
    connector: 'memory',
    file: appDir+'/loopback/data/loopback-data.json',
  }
};
