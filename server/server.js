const express = require("express");
const app = express();
const cors = require("cors");
// const Routes = require("./Routes/entries");
const entriesRoutes = require("./Routes/entriess");
const reviewEntriesRoutes = require("./Routes/reviewEntries");
const quotesRoutes = require("./Routes/quotes");
const knex = require("knex")(require("./knexfile"));

app.use(express.json());
app.use(cors());

require("dotenv").config();
const { port, backend_url } = process.env;

// ROUTE TO GET LIST OF ALL ENTRIES
// app.use("/entries", Routes);
app.use("/entries", entriesRoutes);
app.use("/entriesrev", reviewEntriesRoutes);
app.use("/quotes", quotesRoutes);

// knex code databse *****************************************************///////
// app.get("/entries", (res, req) => {
// 	knex.select("*")
// 		.from("entries")
// 		// .where("id", "719ec467-020b-48a8-83ef-68b5659ebb28")
// 		.then((data) => {
// 			res.json(data);
// 		})
// 		.catch((err) => {
// 			// err.send("error getting entries");
// 		});
// });

// app.get("/entries/rev", (res, req) => {
// 	knex.select("*")
// 		.from("entriesReview")
// 		.then((data) => {
// 			res.json(data);
// 		})
// 		.catch((err) => {
// 			// err.send("error getting entries");
// 		});
// });

app.get("/", (req, res) => {
	res.status(200).send("Server is running");
});

app.listen(port, () => {
	console.log("Server started on http://localhost:8080");
	console.log("Press ctrl + C to stop server");
});
