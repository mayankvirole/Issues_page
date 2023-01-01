const express = require("express");
const router = express.Router();
const issueController = require("../controllers/issuesController");

router.post("/create-issue", issueController.createNewIssue);
router.get("/all-issues", issueController.getAllIssues);
router.post("/my-issues", issueController.getIssuesByUser);
router.get("/Issue", issueController.getIssueById);

module.exports = router;