const express = require("express");
const cors = require("cors");
const path = require('path')
const app = express();

app.use( cors());
app.use(express.json());

app.use( express.static(__dirname + "/public"));

app.get("/", (req,res) => {
	console.log("server is connected !");
})
const PORT = process.env.PORT || 3000;

app.listen( PORT, error => {
	if(error){
		console.error(error.message);
		return;
	}

	console.log(`Server is running on port ${PORT}`);
})

module.exports = app;