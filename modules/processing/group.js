var mongoose = require('mongoose');
var dbURI = 'mongodb://swf:12345@ds233748.mlab.com:33748/qridi';
const db = mongoose.createConnection(dbURI);
var model = require('../../schema/modelUser')
var Schema = mongoose.Schema;

var Usermodel = db.model('Usermodel', model.UserSchema);
var Activitymodel = db.model('Activitymodel', model.ActivitySchema);
var Physicalmodel = db.model('Physicalmodel', model.PhysicalInfoSchema);
var Exercisemodel = db.model('Exercisemodel', model.ExerciseSchema);

function getGender(response){
  Usermodel.aggregate([
        {
          $group: {
        "_id": "$gender",
        "weight": { "$avg": "$weight" },
        "height": { "$avg": "$height" }
        }
      }
    ], function (err, result) {
        if (err) {
            return response(err);
        }
        else {
          return response(result);
        }
    });
}

function getAverageList(response){
  Activitymodel.aggregate([
    { "$group": {
      '_id': '$polar-user',
      "calories": { "$avg": "$calories" },
      "active-calories": { "$avg": "$active-calories" },
      "calories": { "$avg": "$calories" },
      count:{$sum:1}
    }
  },
  {"$sort": {"count": -1}}
    ], function (err, result) {
        if (err) {
            return response(err);
        }
        else {
          return response(result);
        }
    });
}

function getAverage(response){
  Activitymodel.aggregate([
    { "$group": {
      '_id': '1',
      "calories": { "$avg": "$calories" },
      "active-calories": { "$avg": "$active-calories" },
      "calories": { "$avg": "$calories" },
      'max-calories': { $max: "$calories" },
      'active-max': { $max: "$active-calories" },
      'max-step': { $max: "$active-steps" },
      'min-calories': { $min: "$calories" },
      'active-min': { $min: "$active-calories" },
      'min-step': { $min: "$active-steps" }
    }
  }
    ], function (err, result) {
        if (err) {
            return response(err);
        }
        else {
          return response(result);
        }
    });
}

function getStats(response){
  Exercisemodel.aggregate([
    { "$group": {
      '_id': {
      'sport': '$detailed-sport-info',
      'device': '$device'
    },
    'distance': { $max: "$distance" },
    count:{$sum:1}
  }
},
{"$sort": {"count": -1}}
    ], function (err, result) {
        if (err) {
            return response(err);
        }
        else {
          return response(result);
        }
    });
}

module.exports = {
  getGender: getGender,
  getAverageList: getAverageList,
  getAverage: getAverage,
  getStats: getStats
}
