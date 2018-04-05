//Actions related to personal data from user
var express = require('express');
var router = express.Router();
var analyze = require('../modules/processing/individual');

router.get('/activity/:id', function(req, res, next) {
  var average = {};
  average.steps = analyze.getAverage(req.params.id ,function(response){
    return res.json(response);
  });
});

router.get('/exercise/:id', function(req, res, next) {
  var average = {};
  average.steps = analyze.getAverage(req.params.id ,function(response){
    return res.json(response);
  });
});


module.exports = router;
