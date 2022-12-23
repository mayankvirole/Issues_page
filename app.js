const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./api/config/db");



// mongoose.set("useCreateIndex", true);
mongoose
  .connect(config.database, { useNewUrlParser: true })
  .then(() => {
    console.log("Database is connected");
  })
  .catch(err => {
    console.log({ database_error: err });
  });
app.use( cors());
app.use(express.json());

app.use( express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.get("/", (req,res) => {
	console.log("server is connected !");
})

const userRoutes = require("./api/user/routes/user"); 
app.use("/user", userRoutes);

const PORT = process.env.PORT || 3000;

app.listen( PORT, error => {
	if(error){
		console.error(error.message);
		return;
	}

	console.log(`Server is running on port ${PORT}`);
})

module.exports = app;