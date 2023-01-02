const Comment = require("../models/Comment");

exports.addNewComment = async (req, res) => {
	try{
		let Comments = await Comment.find({text : req.body.text});
		if(Comments.length >= 1){
			return res.status(409).json({
				message : "matching comment found!"
			});
		}

		const comment = new Comment({
			text : req.body.text,
			author : {
				id : req.body.author.id,
				username : req.body.author.username
			}
		})

		let data = await comment.save();
		res.status(201).json({data});
	} catch(err){
		res.status(400).json({err : err});
	}
}

exports.editComment = async (req, res) => {
	
}