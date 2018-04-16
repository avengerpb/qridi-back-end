var fetch = require('node-fetch');
const data = require('../database/user')

//GET personal info from API
function getInfo(id,token,user, response){
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
    return response('Stored');
    data.storeUser(body,user); //storing data in Qridi database
});
}

//Get Training data
function getTraining(id,token, uri,response){
  const headers = {
    'Accept':'application/json',
    'Authorization' : 'Bearer ' + token
  };


  fetch(uri,
  {
    method: 'GET',
    headers: headers
  })
  .then(function(res) {
      return res.json();
  }).then(function(body) {
      return response(body['exercises']);
  });
}

//Get Acitivity data
function getDaily(id,token, uri, response){
  const headers = {
    'Accept':'application/json',
    'Authorization' : 'Bearer ' + token
  };

  fetch(uri,
  {
    method: 'GET',
    headers: headers
  })
  .then(function(res) {
      return res.json();
  }).then(function(body) {
      return response(body['activity-log']);
  });
}

//Get Physical data
function getPhysical(id,token, uri, response){
  const headers = {
    'Accept':'application/json',
    'Authorization' : 'Bearer ' + token
  };

  fetch(uri,
  {
    method: 'GET',
    headers: headers
  })
  .then(function(res) {
      return res.json();
  }).then(function(body) {
        return response(body['physical-informations']);
  });
}

function getData(id,token, uri, response){
  const headers = {
    'Accept':'application/json',
    'Authorization' : 'Bearer ' + token
  };

  fetch(uri,
  {
    method: 'GET',
    headers: headers
  })
  .then(function(res) {
      return res.json();
  }).then(function(body) {
        return response(body);
  });
}

function commitData(id,token, uri){
  const headers = {
    'Accept':'application/json',
    'Authorization' : 'Bearer ' + token
  };

  fetch(uri,
  {
    method: 'PUT',
    headers: headers
  })
  .then(function(res) {
      return res.json();
  }).then(function(body) {
        console.log('Commited')
  });
}

module.exports.getInfo = getInfo;
module.exports.getTraining = getTraining;
module.exports.getDaily = getDaily;
module.exports.getPhysical = getPhysical;
module.exports.getData = getData;
