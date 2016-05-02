var app = require('../loopback/server/server.js')

module.exports = {
  /**
  * Import entity into loopback
  * @param {model} The model to insert data into
  * @param {data} The data to import
  */
  insertLoopbackData(model,data)
  {
     //var model = app.model(model,{dataSource:'db'});
     var model = app.loopback.getModel(model);

     if (model==null)
     {
       throw new Error('Model is invalid');
     }

     data.forEach(function(element){
      model.upsert(element,function(err){
        throw new Error(err);
      });
     });
  },
};
