const knex = require("knex")(require("../knexfile"));
// const uuid = require("uuid").v4;

exports.index = (req, res) => {
	knex("users")
		.then((users) => {
			// console.log(users);
			res.status(200).json(users);
		})
		.catch((err) => {
			res.status(400).send("error");
		});
};

exports.seeUser = (req, res) => {
	knex("users").join("id", "entries.user_id", "entriesReview.user_id");
};
