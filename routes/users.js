var express = require('express');
var router = express.Router();
var readYaml = require('read-yaml');
var fetch = require('node-fetch');

/* GET users listing. */
router.get('/', function(req, res, next) {

  var data = readYaml.sync('python/config.yml');
  var id = data.user_id;
  const request = require('node-fetch');
  const inputBody = {"member-id": id};
  const headers = {
    'Authorization' : 'Bearer ' + id,
    'Accept':'application/json'
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
