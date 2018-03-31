//Handle action for both teacher and student

var express = require('express');
var router = express.Router();
var readYaml = require('read-yaml');
var bcrypt = require('bcryptjs');
const api = require('../modules/api/user')
const data = require('../modules/database/user')

//Student

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
var save_session = function(req,user){
    req.session.user = user;
}

router.post('/login', function(req, res, next) {
    data.login(req, function(response){
      if (response != 0 && response != 1){
        req.session.user = response;
        res.redirect("/profile/"+ response.username);
      }
      else if (response == 0) {
        res.json("No user")
      }
      else if (response == 1) {
        res.json("Wrong password")
      }
      else {
        res.json("Problem")
      }
    })
});

router.get('/logout', (req, res) => {
	req.session.destroy((err) => {
	  if(err) {
	    throw err;
	  } else {
	    res.json('Logged Out');
	  }
	});
});


module.exports = router;
