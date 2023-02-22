const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

require("dotenv").config();
const { port, backend_url } = process.env;

app.get("/", (req, res) => {
	res.status(200).send("Server is running");
});

app.listen(port, () => {
	console.log("Server started on http://localhost:8080");
	console.log("Press ctrl + C to stop server");
});
