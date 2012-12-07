var mongoose = require('mongoose')
  , async = require('async')

module.exports = function (app, auth) {
  console.log('registering Pledge controller');
  var pledges = require('../app/controllers/pledges')
  app.get('/add', pledges.add)
  app.get('/sum', pledges.sum)
}
