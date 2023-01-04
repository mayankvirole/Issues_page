const mongoose = require("mongoose");

const issueSchema = mongoose.Schema({
	title : {
		type : String,
		required : [true]
	},

	desc : {
		type : String,
		required : [true]
	},

	createdAt : {
		type : Date,
		default:	Date.now()
	},

	author : 
	{		
		id: {
			type : mongoose.Schema.Types.ObjectId,
			ref : 'User'
		},
		username: String
	},

	comments : []
})

module.exports = mongoose.model("Issue", issueSchema);