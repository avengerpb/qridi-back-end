//Actions related to personal data from user
var express = require('express');
var router = express.Router();
var analyze = require('../modules/processing/individual');

router.get('/activity/:id/average', function(req, res, next) {
  analyze.getAverage(req.params.id, function(response){
    return res.json(response);
  });
});

router.get('/activity/:id/max', function(req, res, next) {
  analyze.maxNumber(req.params.id, function(response){
    return res.json(response);
  });
});

router.get('/exercise/:id/common', function(req, res, next) {
  analyze.commonExercise(req.params.id ,function(response){
    return res.json(response);
  });
});

router.get('/exercise/:id/sport', function(req, res, next) {
  analyze.commonSport(req.params.id ,function(response){
    return res.json(response);
  });
});



module.exports = router;
