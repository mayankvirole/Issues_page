const express = require("express");
const router = express.Router();
const issueController = require("../controllers/issuesController");

router.post("/create-issue", issueController.createNewIssue);
router.get("/all-issues", issueController.getAllIssues);

module.exports = router;