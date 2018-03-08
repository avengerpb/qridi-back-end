//Get user data from polar api using node-fetch module
const request = require('node-fetch');
//const fetch = require('isomorphic-fetch');
const headers = {
  'Accept':'application/json'
};

//client id:f0030b32-568d-4543-b4bf-cb6f2d49139f
//Client Secret: 7f990c87-0781-476b-bdc6-169b9537
//polar token: 76fc890eea5[76fc8908eea5]

fetch('https://www.polaraccesslink.com/v3/users/{f0030b32-568d-4543-b4bf-cb6f2d49139f}',{
  method: 'GET',
  headers: headers
})

.then(function(res) {
  return res.json();
}).then(function(body){
  console.log(body);
});
