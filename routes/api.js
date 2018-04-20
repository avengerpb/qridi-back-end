//Handle actions related to Polar API

var express = require('express');
var router = express.Router();
const auth = require('../modules/api/auth')
const trans =  require('../modules/api/transaction')
const user =  require('../modules/api/user')
var readYaml = require('read-yaml');
var store = require('../modules/database/user');

/* GET Token. */

router.get('/get_token', function(req, res, next) {
  // if (req.session.user && req.cookies.user_sid){
  auth.getToken(function(response){
    res.json(response)
  });
// }
// else {
//   res.json("Need Log in");
// }
});

router.post('/getInfo', function(req, res, next) {
  //Read python/config.yml to find token
  // if (req.session.user && req.cookies.user_sid){
  var data = readYaml.sync('polar_python/config.yml');
  var id = data.user_id;
  var token  = data.access_token;
  user.getInfo(id,token,req.body.username, function (response){
    res.json(response);
  });
  // } //Call function to store user info to database
   // else {
   //   res.json("Need Log in");
   // }
});

// Get exercise data
router.get('/getExercise', function(req, res, next) {
  var data = readYaml.sync('polar_python/config.yml');
  var id = data.user_id;
  var token  = data.access_token;

  trans.createTraining(id,token, function (response) {
      if (response){
        user.getTraining(id,token, response, function (ms){
          ms.forEach(elem => {
            user.getData(id, token, elem, function(data) {
              console.log(data);
              store.storeExercise(data);
              return res.json('Get Exercise');
            });
          });
        });
        user.commitData(id,token, response);
      }
      else {
        return res.json('No new Exercise data');
      }
  });
});

//Get Activity Data
router.get('/getActivity', function(req, res, next) {
  var data = readYaml.sync('polar_python/config.yml');
  var id = data.user_id;
  var token  = data.access_token;

  trans.createDaily(id,token, function (response) {
      if (response){
        user.getDaily(id,token, response, function (ms){
          ms.forEach(elem => {
            user.getData(id, token, elem, function(data) {
              console.log(data);
              store.storeActivity(data);
            });
          });
        });
        user.commitData(id,token, response);
      }
      else {
        return res.json('No new Activity data');
      }
  });

});

//Get Physical Data
router.get('/getPhysical', function(req, res, next) {
  var data = readYaml.sync('polar_python/config.yml');
  var id = data.user_id;
  var token  = data.access_token;

  trans.createPhysical(id,token, function (response) {
      if (response){
        user.getPhysical(id,token, response, function (ms){
          ms.forEach(elem => {
            user.getData(id, token, elem, function(data) {
              console.log(data);
              store.storePhysical(data);
            });
          });
        });
        user.commitData(id,token, response);
      }
      else {
        return res.json('No new Physical data');
      }
  });
});


module.exports = router;
