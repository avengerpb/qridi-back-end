var mongoose = require('mongoose');
var dbURI = 'mongodb://swf:12345@ds233748.mlab.com:33748/qridi';
const db = mongoose.createConnection(dbURI);

//update User information
function upsert(data){
  db.collection('Users').update(
    {data},{data},{upsert: true});
}

module.exports.upsert = upsert;
