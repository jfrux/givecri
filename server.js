// Create Server and Express Application
var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(3000)
var fs = require("fs");
var path = require("path");
// Load configurations
var env = process.env.NODE_ENV || 'development';
var config = require('./config/config')[env];
var auth = require('./authorization');

// Add our Application Stuff
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);



// Bootstrap db connection
var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
    mongoose.connect(config.db)

// Bootstrap models
var models_path = __dirname + '/app/models'
require(path.join(models_path,'user'));
require(path.join(models_path,'pledge'));


// Add DocPad to our Application
var docpadInstanceConfiguration = {
    // Give it our express application and http server
    serverExpress: app,
    serverHttp: server,
    // Tell it not to load the standard middlewares (as we handled that above)
    middlewareStandard: false
};
        
// Bootstrap routes
require('./config/routes')(app, auth)
var docpadInstance = require('docpad').createInstance(docpadInstanceConfiguration, function(err){
    if (err)  return console.log(err.stack);
    // Tell DocPad to perform a generation, extend our server with its routes, and watch for changes
    docpad.action('generate server watch', function(err){
        if (err)  return console.log(err.stack);

    });
});

// Continue with your application
// ...