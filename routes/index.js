var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var dbURI = 'mongodb://swf:12345@ds233748.mlab.com:33748/qridi';
var PythonShell = require('python-shell');

global.db = mongoose.createConnection(dbURI);
/* GET home page. */
var options = {
  mode: 'text',
  pythonPath: 'python3',
  pythonOptions: ['-u'], // get print results in real-time
  scriptPath: 'python'
};

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  PythonShell.run('authorization.py', options, function (err) {
  if (err) throw err;
  });
});

module.exports = router;
