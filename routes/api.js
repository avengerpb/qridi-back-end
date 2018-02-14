var express = require('express');
var router = express.Router();
var passport = require('passport');
var OAuth2Strategy = require('passport-oauth2');

passport.use(new OAuth2Strategy({
    authorizationURL: 'https://flow.polar.com/oauth2/authorization',
    tokenURL: 'https://polarremote.com/v2/oauth2/token',
    clientID: 'f0030b32-568d-4543-b4bf-cb6f2d49139f',
    clientSecret: '7f990c87-0781-476b-bdc6-169b95373c91',
    callbackURL: "http://localhost:3000/api/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    return true;
  }
));

router.get('/',  passport.authenticate('oauth2'));

router.get('/callback',passport.authenticate('oauth2', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('localhost:3000');
  }); 

module.exports = router;

