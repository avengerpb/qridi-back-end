//To see general data in a group/class
var express = require('express');
var router = express.Router();
var analyze = require('../modules/processing/group');

router.get('/activity/gender', function(req, res, next) {
  analyze.getGender( function(response){
    return res.json(response);
  });
});

router.get('/activity/list', function(req, res, next) {
  analyze.getAverageList( function(response){
    return res.json(response);
  });
});

router.get('/activity/average', function(req, res, next) {
  analyze.getAverage( function(response){
    return res.json(response);
  });
});

router.get('/activity/stats', function(req, res, next) {
  analyze.getStats( function(response){
    return res.json(response);
  });
});

module.exports = router;
