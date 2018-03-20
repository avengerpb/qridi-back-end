//Handle actions related to profile such as edit or view profile

var express = require('express');
var router = express.Router();
const profile = require('../modules/database/profile')

/* GET home page. */
router.get('/:name', function(req, res) {
  profile.getProfile(req.params.name, function(response){
    res.json(response)
  })
});

module.exports = router;
