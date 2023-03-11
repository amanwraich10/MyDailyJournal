const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const reviewEntriesRoutes = require("./Routes/reviewEntries");
const quotesRoutes = require("./Routes/quotes");
const entriesRoute = require("./Routes/entriess");
const usersRoute = require("./Routes/users");
const knex = require("knex")(require("./knexfile"));
require("dotenv").config();
const { port, backend_url } = process.env;
app.use(cors());
app.use(express.json());
const uuid = require("uuid").v4;
app.use(express.urlencoded({ extended: false }));

function authorize(req, res, next) {
	const token = req.headers.authorization.split(" ")[1];
	jwt.verify(token, "secretkey", (err, decoded) => {
		if (err) {
			res.status(403).json({ success: false, message: "No Token" });
		} else {
			req.user = decoded;
		}
		next();
	});
}

app.post("/signup", (req, res) => {
	const name = req.body.name;
	const username = req.body.username;
	const password = req.body.password;
	const user = {
		id: uuid(),
		name,
		username,
		password,
	};

	knex("users")
		.insert(user)
		.then((newuser) => {
			res.status(201).json(newuser[0]);
		})
		.catch(() => {
			res.status(400).json({
				message: `error creating user `,
			});
		});
});

app.post("/login", (req, res) => {
	let username = req.body.username;
	let password = req.body.password;
	knex("users")
		.select({
			id: "id",
			password: "password",
		})
		.then((users) => {
			users.map((u) => {
				if (u.password === password) {
					let token = jwt.sign({ username: username }, "secretkey");
					res.status(200).json({ token: token });
				}
			});
		})
		.catch((err) => {
			console.log(err);
		});
});

app.get("/profile", authorize, (req, res) => {
	const u = req.user;
	knex("users")
		.then(() => {
			res.status(200).json({ u });
		})
		.catch((err) => {
			res.status(400).send("error");
		});
});

app.use("/entriesrev", reviewEntriesRoutes);
app.use("/quotes", quotesRoutes);
app.use("/entries", entriesRoute);
app.use("/users", usersRoute);

app.get("/", (req, res) => {
	res.status(200).send("Server is running");
});

app.listen(port, () => {
	console.log("Server started on http://localhost:8082");
	console.log("Press ctrl + C to stop server");
});
