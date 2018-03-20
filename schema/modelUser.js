var db = require('mongoose');
var Schema = db.Schema
var userSchema = new Schema (
	{
		"polar-user-id": {type: Number},
	  "member-id": {type: String},
	  "registration-date": {type: String},
	  "first-name": {type: String},
	  "last-name": {type: String},
	  "birthdate": {type: String},
	  "gender": {type: String},
	  "weight": {type: Number},
	  "height": {type: Number},
	  "field": [
	    {
	      "value": {type: String},
	      "index": {type: Number},
	      "name": {type: String}
	    }
	  ]

	});

module.exports = db.model('User', userSchema);
