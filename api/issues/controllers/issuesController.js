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
			desc : req.body.desc,
			author : {
				id : req.body.author.id,
				username : req.body.author.username
			}
		})

		let data = await issue.save();
		res.status(201).json({data});
	} catch(err){
		res.status(400).json({err : err});
	}
}

exports.getIssueClicked = async (req,res) => {
	try{}
	catch(err){}
}

exports.getIssuesByUser = async (req,res) => {
	try{
		let Issues = await Issue.find({"author.username" : req.body.username });
		res.status(201).json({Issues});
	}
	catch (err) {
		res.status(400).json({err : err});
	}
}

exports.getAllIssues =  async (req,res) => {
	try{
		let Issues = await Issue.find({})
		res.status(201).json({Issues});
	} catch(err) {
		res.status(400).json({err : err});
	}
}