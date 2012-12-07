var mongoose = require('mongoose')
  , _ = require("underscore")

exports.add = function (req, res) {
  var Pledge = mongoose.model('Pledge')
  console.log("add called");
  var pledge = new Pledge(req.body)
  
  pledge.save(function (err) {
    var defaultResp = {
      'status':'unknown',
      'message':'',
      'payload':{}
    };

    if (err) {
      defaultResp.status = 'error';
      defaultResp.message = err.message;
      defaultResp.payload = err;
      return res.json(defaultResp);
    }

    defaultResp.status = 'success';
    defaultResp.message = 'Pledge saved successfully!';
    defaultResp.payload = pledge;
    return res.json(defaultResp);
  })
}

// auth callback
exports.sum = function (req, res) {
  var Pledge = mongoose.model('Pledge')
  console.log("add called");
  res.write(JSON.stringify('success'));
}
