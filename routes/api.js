var express = require('express');
var router = express.Router();
var PythonShell = require('python-shell');

/* GET home page. */
var options = {
  mode: 'text',
  pythonPath: 'python3',
  pythonOptions: ['-u'], // get print results in real-time
  scriptPath: 'python'
};

router.get('/', function(req, res, next) {
  PythonShell.run('authorization.py', options);
});

module.exports = router;
