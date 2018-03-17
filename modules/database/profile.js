var mongoose = require('mongoose');
var dbURI = 'mongodb://swf:12345@ds233748.mlab.com:33748/qridi';
const db = mongoose.createConnection(dbURI);

function getProfile(name){
  db.collection('Users').findOne({
        'username': name
  	}, (err, user) => {
  		if(err) throw err;
  		if(!user) {
  				console.log('No user')
  		}else{
  			console.log(user)
  		  }
      });
}

module.exports.getProfile = getProfile;
