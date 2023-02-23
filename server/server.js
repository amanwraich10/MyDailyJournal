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

app.get("/", (req, res) => {
	res.status(200).send("Server is running");
});

app.listen(port, () => {
	console.log("Server started on http://localhost:8080");
	console.log("Press ctrl + C to stop server");
});
