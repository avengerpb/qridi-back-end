let express = require('express');
let router = express.Router();
let request = require('request');
const oauth = require('simple-oauth2');

const credentials = {
  client: {
    id: 'f0030b32-568d-4543-b4bf-cb6f2d49139f',
    secret: '7f990c87-0781-476b-bdc6-169b95373c91'
  },
  auth: {
    tokenHost: 'https://flow.polar.com/',
    authorizePath: 'oauth2/authorization',
    tokenPath: 'https://polarremote.com/v2/oauth2/token'
  },
  http: {
    "Content-Type" : "application/x-www-form-urlencoded",
    "Accept" : "application/json;charset=UTF-8"
  }
  ,
  options: {
    bodyFormat: 'json',
    useBodyAuth: false,
    useBasicAuthorizationHeader: false
  }
};

// Initialize the OAuth2 Library
const oauth2 = oauth.create(credentials);

const authorizationUri = oauth2.authorizationCode.authorizeURL({
  redirect_uri: 'http://localhost:3000/api/callback'
});


/* GET home page. */
router.get('/', (req, res, next) => {
  console.log(authorizationUri);
  res.redirect(authorizationUri);
});

router.get('/callback',(req,res,next) => {
  const code = req.query.code;
  console.log(code);
    // const options = {
    //   "grant_type" : "authorization_code",
    //   "code" : code
    // };
    //
    // oauth2.authorizationCode.getToken(options, (error, result) => {
    //   if (error) {
    //     console.error('Access Token Error', error.message);
    //     return res.json('Authentication failed');
    //   }
    //
    //   console.log('The resulting token: ', result);
    //   const token = oauth2.accessToken.create(result);
    //
    //   return res
    //     .status(200)
    //     .json(token);
    // });

});

router.get('/success', (req, res) => {
  res.send('');
});



module.exports = router;
