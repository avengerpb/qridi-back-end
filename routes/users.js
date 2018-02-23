//Handle action for both teacher and student

var express = require('express');
var router = express.Router();
var readYaml = require('read-yaml');
const api = require('../modules/api/user')

//Student
/* GET and store student_info from API */
router.get('/student_info', function(req, res, next) {
  //Read python/config.yml to find token
  var data = readYaml.sync('polar_python/config.yml');
  var id = data.user_id;
  var token  = data.access_token;
  api.getInfo(id,token); //Call function to store user info to database
});

//Teacher

module.exports = router;
