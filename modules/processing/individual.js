var mongoose = require('mongoose');
var dbURI = 'mongodb://swf:12345@ds233748.mlab.com:33748/qridi';
const db = mongoose.createConnection(dbURI);
var model = require('../../schema/modelUser')
var Schema = mongoose.Schema;

var Usermodel = db.model('Usermodel', model.UserSchema);
var Activitymodel = db.model('Activitymodel', model.ActivitySchema);
var Physicalmodel = db.model('Physicalmodel', model.PhysicalInfoSchema);
var Exercisemodel = db.model('Exercisemodel', model.ExerciseSchema);

function getAverage(id,response){
  Activitymodel.aggregate([
        { $match: {
            'polar-user': { $regex:  /.*/+id }
        }},
        {
          $group: {
        "_id": id,
        "active-calories": { "$avg": "$active-calories" },
        "calories": { "$avg": "$calories" },
        "steps": { "$avg": "$active-steps" }
      }}
    ], function (err, result) {
        if (err) {
            return response(err);
        }
        else {
          return response(result);
        }
    });
}

function commonExercise(id,response){
  Exercisemodel.aggregate([
    { "$match": {
        'polar-user': { $regex:  /.*/+id }
      }},
      { "$group": {
        '_id': '$device',
        count:{$sum:1}
      }
    },
    {"$sort": {"count": -1}}
      ],
   function (err, result) {
        if (err) {
            return response(err);
        }
        else {
          return response(result);
        }
    });
}

function commonSport(id,response){
  Exercisemodel.aggregate([
    { "$match": {
        'polar-user': { $regex:  /.*/+id }
      }},
      { "$group": {
        '_id': '$detailed-sport-info',
        count:{$sum:1}
      }
    },
    {"$sort": {"count": -1}}
      ],
   function (err, result) {
        if (err) {
            return response(err);
        }
        else {
          return response(result);
        }
    });
}

function maxNumber(id,response){
  Activitymodel.aggregate([
    { "$match": {
        'polar-user': { $regex:  /.*/+id }
      }},
      { "$group": {
        '_id': id,
        'max-calories': { $max: "$calories" },
        'active-max': { $max: "$active-calories" },
        'max-step': { $max: "$active-steps" }
      }
    },
    {"$sort": {"count": -1}}
      ],
   function (err, result) {
        if (err) {
            return response(err);
        }
        else {
          return response(result);
        }
    });
}


module.exports = {
  getAverage: getAverage,
  commonExercise: commonExercise,
  commonSport: commonSport,
  maxNumber: maxNumber
}
