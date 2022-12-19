const express = require("express");
const cors = require("cors");
const path = require('path')
const app = express();

app.use( cors());
app.use(express.json());

app.use( express.static('public'));

app.get("/", (req,res) => {
	res.json({message : 'Hello from server!'});
	// res.sendFile(path.resolve(__dirname , '../issues_page/dist', 'index.html'));
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