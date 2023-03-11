const knex = require("knex")(require("../knexfile"));

exports.index = (req, res) => {
	knex("users")
		.select({
			id: "id",
			password: "password",
			username: "username",
		})
		.then((users) => {
			res.status(200).json(users);
		})
		.catch(() => {
			res.status(400).json("error");
		});
};

exports.showUser = (req, res) => {
	console.log(req.params.id);
	knex("users")
		.where({ id: req.params.userId })
		.then((user) => {
			res.status(200).json(user);
		})
		.catch(() => {
			res.status(400).json("error");
		});
};
