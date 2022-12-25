const express = require("express");
const router = express.Router();
const issueController = require("../controllers/issuesController");

router.post("/create-issue", issueController.createNewIssue);


module.exports = router;