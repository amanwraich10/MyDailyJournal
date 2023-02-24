const express = require("express");
const app = express();
const cors = require("cors");
const Routes = require("./Routes/entries");

app.use(express.json());
app.use(cors());

require("dotenv").config();
const { port, backend_url } = process.env;

// ROUTE TO GET LIST OF ALL ENTRIES
app.use("/entries", Routes);

// app.use(function (req, res, next) {
// 	if (
// 		req.method === "post" &&
// 		req.headers["content-type"] !== "application/json"
// 	) {
// 		res.status(400).send("err");
// 	} else {
// 		next();
// 	}
// });

app.get("/", (req, res) => {
	res.status(200).send("Server is running");
});

app.listen(port, () => {
	console.log("Server started on http://localhost:8080");
	console.log("Press ctrl + C to stop server");
});
