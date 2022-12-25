const Issue = require("../models/Issue");

exports.createNewIssue = async (req, res) => {
	try{
		let isIssue = await Issue.find({title : req.body.title})
		if(isIssue.length >= 1){
			return res.status(409).json({
				message : "issue already created with a matching title"
			});
		}
		
		const issue = new Issue({
			title : req.body.title,
			desc : req.body.desc
		})

		let data = await issue.save();
		res.status(201).json({data});
	} catch(err){
		res.status(400).json({err : err});
	}
}