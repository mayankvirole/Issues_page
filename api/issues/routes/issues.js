const express=require("express");
const mongoose=require("mongoose");
const router=express.Router();
const multer=require("multer");
const issueController=require("../controllers/issuesController");
const Image=require("../models/Image");
var fs=require('fs');
var path=require('path');

const Storage=multer.diskStorage({
	destination: (req,file,cb) => {
		cb(null,'uploads')
	},
	filename: (req,file,cb) => {
		cb(null,file.originalname)
	}
});

const upload=multer({storage: Storage});

router.post("/create-issue",issueController.createNewIssue);
router.get("/all-issues",issueController.getAllIssues);
router.post("/my-issues",issueController.getIssuesByUser);
router.get("/Issue",issueController.getIssueById);
router.put("/update-issue",issueController.updateIssue);
router.put("/edit-issue",issueController.editIssue);
router.delete("/delete-issue",issueController.deleteIssue);

router.get("/view-image",async (req,res) => {
	const img = await Image.findById(req.params.id);
	res.json({img});
})

router.post("/upload-image",upload.single('img'),async (req,res) => {
	let newImage=new Image({
		issue_id : req.query.id,
		img: {
			data: fs.readFileSync('uploads/'+req.file.filename),
			contentType: "image/jpg" || "image/png"
		}
	});
	newImage.save()
		.then((res) => console.log('image uploaded successfully !'))
		.catch((err) => {console.log(err,"error occurred !");})
	res.send("image saved")
})

module.exports=router;