const knex = require("knex")(require("../knexfile"));

const uuid = require("uuid").v4;

exports.index = (_req, res) => {
	knex("quotes")
		.then((quotes) => {
			res.status(200).json(quotes);
		})
		.catch((err) => {
			res.status(400).send("error");
		});
};

exports.addQuote = (req, res) => {
	const request_body = JSON.parse(JSON.stringify(req.body));

	const quote = {
		id: uuid(),
		text: request_body.text,
	};

	knex("quotes")
		.insert(quote)
		.then((quotes) => {
			res.status(200).json(quotes);
		})
		.catch((err) => {
			res.status(400).send("error");
		});
};
