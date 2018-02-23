var express = require('express');
var router = express.Router();
var readYaml = require('read-yaml');
const api = require('../modules/api/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  //Read python/config.yml to find token
  var data = readYaml.sync('polar_python/config.yml');
  var id = data.user_id;
  var token  = data.access_token;
  api.getInfo(id,token); //Call function to store user info to database
});

module.exports = router;
