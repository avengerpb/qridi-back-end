var mongoose = require('mongoose');
var dbURI = 'mongodb://swf:12345@ds233748.mlab.com:33748/qridi';
const db = mongoose.createConnection(dbURI);

function getProfile(name, callback){
  db.collection('Users').findOne({
    $or: [
      {'username': name},
      {'polar-user-id': parseInt(name)}
         ]
  }, (err, user) => {
  		if(err) throw err;
  		if(!user) {
  				return callback({'Response': "No user"})
  		}else{
  			return callback(user)
  		  }
      });
}
module.exports.getProfile = getProfile;
