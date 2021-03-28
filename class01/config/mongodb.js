const mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/node_learning';

const mongodbConnection = () => {

    
    mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true  });
    
    //Get the default connection
    var db = mongoose.connection;
    
    db.once('open', function() {
        console.log("connected")
      });
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
}

module.exports = mongodbConnection; //default