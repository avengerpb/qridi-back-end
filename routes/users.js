var express = require('express');
var router = express.Router();
var readYaml = require('read-yaml');
var fetch = require('node-fetch');

/* GET users listing. */
router.get('/', function(req, res, next) {

  var data = readYaml.sync('polar_python/config.yml');
  var id = data.user_id;
  var token  = data.access_token;
  const headers = {
    'Accept':'application/json',
    'Authorization' : 'Bearer ' + token
  };

    fetch('https://www.polaraccesslink.com/v3/users/'+id,
  {
    method: 'GET',
    headers: headers
  })
  .then(function(res) {
      return res.json();
  }).then(function(body) {
      console.log(body);
  });

});

module.exports = router;
