// pledge schema
var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , User = mongoose.model("User");
var PledgeSchema = {};
var AnonUser = {};
var AnonUserObj = {
   name: "Anonymous"
  ,email: "anonymous@swodev.com"
  ,username: "anonymous"
  ,approved: true
}

//check if anonymous exists, or create it
function findOrCreateAnon(callback) {
  var cb = callback;
  User.findOne({ 'username': 'anonymous' }, function (err, user) {
    if(err) return cb(err, user);
    console.log('looked for anonymous user...');

    if (!user) {
      console.log('no default anonymous found...');
      AnonUser = new User(AnonUserObj)

      AnonUser.save(function(err) {
        if(err) return new Error(err);
        console.log("default anonymous saved!");

        return cb(null,AnonUser._id);
      });
    } else {
      return cb(null,user._id);
    }
  })
}

//create schema
findOrCreateAnon(function(err,userId) {
  PledgeSchema = new Schema({
      user: {type : Schema.ObjectId, ref : 'User', default: userId}
      ,amount: {type : Number, default : '0'}
      ,ip:String
      ,location:String
      ,createdAt: {type : Date, default : Date.now}
  });
  console.log('registering Pledge model');
  mongoose.model('Pledge', PledgeSchema)
})
