var PythonShell = require('python-shell');

var options = {
  mode: 'text',
  pythonPath: 'python3',
  pythonOptions: ['-u'], // get print results in real-time
  scriptPath: 'polar_python'
};
//Run python Shell for to get token
function getToken (callback){
  PythonShell.run('authorization.py', options, function(err){
    if (err) {
      console.log(err);
      return callback('Get Token start')
    }
    else {
      return callback(false)
    }
  });
}

module.exports.getToken = getToken;
