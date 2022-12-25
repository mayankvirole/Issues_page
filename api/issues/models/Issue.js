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
	}
})

issueSchema.statics.findByCredentials = async (title) => {
	const issue = await Issue.findOne({ title });
  if (!issue) {
    throw new Error({ error: "Invalid title" });
  }

  return issue;
}

const Issue = mongoose.model("Issue", issueSchema);
module.exports = Issue;