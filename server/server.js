const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const reviewEntriesRoutes = require("./Routes/reviewEntries");
const quotesRoutes = require("./Routes/quotes");
const entriesRoute = require("./Routes/entriess");
const knex = require("knex")(require("./knexfile"));
require("dotenv").config();
const { port, backend_url } = process.env;
app.use(express.json());
app.use(cors());
const uuid = require("uuid").v4;

// function authorize(req, res, next) {
// 	const token = req.headers.authorization.split(" ")[1];
// 	jwt.verify(
// 		token,
// 		"90df71c0e985a234dc45c01231892f2c392ce20e964b1c351c79c9d32392e867",
// 		(err, decoded) => {
// 			if (err) {
// 				res.status(403).json({ success: false, message: "No Token" });
// 			} else {
// 				console.log(token);
// 				req.user = decoded;
// 			}
// 			next();
// 		}
// 	);
// }
// const users = {};

// app.post("/signup", (req, res) => {
// 	const name = req.body.name;
// 	const username = req.body.username;
// 	const password = req.body.password;
// 	const user = {
// 		id: uuid(),
// 		name,
// 		username,
// 		password,
// 	};

// 	knex("users")
// 		.insert(user)
// 		.then((newuser) => {
// 			// console.log("new", newuser);
// 			res.status(201).json(newuser[0]);
// 		})
// 		.catch(() => {
// 			res.status(400).json({
// 				message: `error creating user `,
// 			});
// 		});
// });

// app.post("/login", (req, res) => {
// 	let username = req.body.username;
// 	let password = req.body.password;

// 	knex("users").then((users) => {
// 		// console.log(users[0].password);
// 		users?.map((u) => {
// 			console.log(u.password);
// 			if (u.password === password) {
// 				let token = jwt.sign(
// 					{ username: username },
// 					"90df71c0e985a234dc45c01231892f2c392ce20e964b1c351c79c9d32392e867"
// 				);
// 				res.status(200).json({ token: token, password });
// 			} else {
// 				console.log("error");
// 				// res.status(403).send({ token: null });
// 			}
// 		});
// 	});

// const usersss = knex("users").where("password", password);
// console.log(usersss);
// if (password === password) {
// 	let token = jwt.sign(
// 		{ username: username },
// 		"90df71c0e985a234dc45c01231892f2c392ce20e964b1c351c79c9d32392e867"
// 	);

// 	res.json({ token: token });
// } else {
// 	res.status(403).send({ token: null });
// }
// });

// app.get("/profile", authorize, (req, res) => {
// 	knex("users")
// 		.then(() => {
// 			res.status(200).json(req.user);
// 		})
// 		.catch((err) => {
// 			res.status(400).send("error");
// 		});
// });

app.use("/entriesrev", reviewEntriesRoutes);
app.use("/quotes", quotesRoutes);
app.use("/entries", entriesRoute);

app.get("/", (req, res) => {
	res.status(200).send("Server is running");
});

app.listen(port, () => {
	console.log("Server started on http://localhost:8082");
	console.log("Press ctrl + C to stop server");
});
