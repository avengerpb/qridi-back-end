var fetch = require('node-fetch');
const data = require('../database/user')

//Create Training transactions
function createTraining(id,token, response){
  const headers = {
    'Accept':'application/json',
    'Authorization' : 'Bearer ' + token
  };

  fetch('https://www.polaraccesslink.com/v3/users/'+id+'/exercise-transactions',
{
  method: 'POST',
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    return response(body['resource-uri']);
}).catch(function(e) {
  return response(false);
});
}

//Create Daily transactions
function createDaily(id,token, response){
  const headers = {
    'Accept':'application/json',
    'Authorization' : 'Bearer ' + token
  };

  fetch('https://www.polaraccesslink.com/v3/users/'+id+'/activity-transactions',
{
  method: 'POST',
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    return response(body['resource-uri']);
}).catch(function(e) {
  return response(false);
});

}

//Create Physicaltransactions
function createPhysical(id,token, response){
  const headers = {
    'Accept':'application/json',
    'Authorization' : 'Bearer ' + token
  };

  fetch('https://www.polaraccesslink.com/v3/users/'+id+'/physical-information-transactions',
{
  method: 'POST',
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    return response(body['resource-uri']);
}).catch(function(e) {
  return response(false);
});
}

module.exports.createTraining = createTraining;
module.exports.createDaily = createDaily;
module.exports.createPhysical = createPhysical;
