//Index routing will be our homepage for now I think we can leave it untouch

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Qridi' });
});

module.exports = router;
