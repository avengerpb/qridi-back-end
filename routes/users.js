//Handle action for both teacher and student

var express = require('express');
var router = express.Router();
var readYaml = require('read-yaml');
var bcrypt = require('bcryptjs');
const api = require('../modules/api/user')
const data = require('../modules/database/user')


//Student
/* GET and store student_info from API */
router.get('/student_info', function(req, res, next) {
  //Read python/config.yml to find token
  var data = readYaml.sync('polar_python/config.yml');
  var id = data.user_id;
  var token  = data.access_token;
  api.getInfo(id,token); //Call function to store user info to database
});

//Register
router.get('/register', function(req, res, next) {
  res.render('register');
});

router.post('/register', function(req, res) {
	// let bcrypt = require('bcryptjs');
	let salt = bcrypt.genSaltSync(10);
	let hash = bcrypt.hashSync(req.body.password, salt);

	let newUser = {
		fullname: 'test',
		username: req.body.username,
		email: req.body.email,
		password: hash,
		user_type: 'Normal'
	}
	data.register(newUser, function(response){
    res.json({'Respone':response})
  });
});

//Login
router.get('/login', function(req, res, next) {
    res.render('login');
});

router.post('/login', function(req, res) {
    data.login(req, function(response){
      res.json({'Respone':response})
    })
});


module.exports = router;
