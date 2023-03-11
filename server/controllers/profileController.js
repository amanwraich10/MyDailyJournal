const knex = require("knex")(require("../knexfile"));

exports.index = (req, res) => {
	knex("users")
		.then((users) => {
			res.status(200).json(users);
		})
		.catch((err) => {
			res.status(400).send("error");
		});
};

exports.seeUser = (req, res) => {
	knex("users").join("id", "entries.user_id", "entriesReview.user_id");
};
