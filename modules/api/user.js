var fetch = require('node-fetch');
const data = require('../database/user')

//GET info from API
function getInfo(id,token){
  const headers = {
    'Accept':'application/json',
    'Authorization' : 'Bearer ' + token
  };

  fetch('https://www.polaraccesslink.com/v3/users/'+id,
{
  method: 'GET',
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    data.upsert(body); //storing data in Qridi database
});
}

module.exports.getInfo = getInfo;
