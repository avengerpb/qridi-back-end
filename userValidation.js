//create users and validating with jsonSchema to MongoDB
db.createCollection('polarusers',
	validator:{
	$jsonSchema:{
	bsonType: "object",
		required:[
				"first_name",
				"last_name",
				"date_of_birth",
				"gender",
				"height",
				"weight",
				"occupation",
				"email",
				"phone",
				"avatar",
			],
	properties:
	{
		first_name:{
			bsonType:"string",
			description: "must be a string and is required"
			},
		last_name:{
			bsonType:"string",
			description: "must be a string and is required"
			},
		date_of_birth:{
			bsonType:"int",
			description: "must be integer and is required",
		}
		gender: {
			enum: [ "male", "female"],
			description: "can only be one of the enum values and is required",
		}
		height:{
			bsonType:"int",
			description: "must be an integer and is required",
		}
		weight:{
			bsonType:"int",
			description: "must be an integer and is required",
		}
		occupation:{
			bsonType:"string",
			description: "must be a string and is required",
		}
		email:{"string",
			bsonType:"string",
			pattern: "@mongodb\.com$",
			description: "must be a string and match the regular expression pattern",
		}
		phone:{
			bsonType:"int",
			pattern:" ^[0-9]{3}-[0-9]{3}-[0-9]{4}$"
			description:" must be a string and is required",
		}
		avatar:{"string",
			bsonType:"string",
			description:"must be a string and is required",
		}
	}
	}
}
validationAction: "warn"
);
