module.exports = {
  development: {
    domain:'http://localhost:9778'
    ,db: 'mongodb://localhost/giveapp'
    ,singly: {
      clientID: "d7aa3f87bcecd1c1d141debcc62bc896"
      , clientSecret: "7955d49b8a28febbfa0b408f77f78de5"
      , callbackURL: "http://localhost:3000/auth/callback"
    }
    ,email:{
      domain: "smtp.sendgrid.net",
      host: "smtp.sendgrid.net",
      port : 587,
      authentication: "login",
      auth: {
            user: "joshuairl",
            pass: "cfr010408"
        }
    }
  }
  ,test: {
    domain:'http://localhost:9778'
    ,db: 'mongodb://localhost/giveapp'
    ,singly: {
      clientID: "d7aa3f87bcecd1c1d141debcc62bc896"
      , clientSecret: "7955d49b8a28febbfa0b408f77f78de5"
      , callbackURL: "http://localhost:3000/auth/callback"
    }
    ,email:{
      domain: "smtp.sendgrid.net",
      host: "smtp.sendgrid.net",
      port : 587,
      authentication: "login",
      auth: {
            user: "joshuairl",
            pass: "cfr010408"
        }
    }
  }
  ,production: {
    domain:'http://givecri.jit.su'
    ,db: 'mongodb://dbserver/giveapp'
    ,singly: {
      clientID: "d7aa3f87bcecd1c1d141debcc62bc896"
      , clientSecret: "7955d49b8a28febbfa0b408f77f78de5"
      , callbackURL: "http://givecri.jit.su/auth/callback"
    }
    ,email:{
      domain: "smtp.sendgrid.net",
      host: "smtp.sendgrid.net",
      port : 587,
      authentication: "login",
      auth: {
            user: "joshuairl",
            pass: "cfr010408"
        }
    }
  }
}