//Handle actions related to Polar API

var express = require('express');
var router = express.Router();
const auth = require('../modules/api/auth')

/* GET home page. */

router.get('/get_token', function(req, res, next) {
  auth.getToken();
});

module.exports = router;
