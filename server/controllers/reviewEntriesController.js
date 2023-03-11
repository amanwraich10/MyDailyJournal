const knex = require("knex")(require("../knexfile"));
const uuid = require("uuid").v4;

const moment = require("moment");

exports.index = (_req, res) => {
	knex("entriesReview")
		.then((entriesReview) => {
			console.log(entriesReview);
			res.status(200).json(entriesReview);
		})
		.catch((err) => {
			res.status(400).send("error");
		});
};

exports.singleRevEntry = (req, res) => {
	knex("entriesReview")
		.where({ id: req.params.entryRevId })
		.then((entry) => {
			res.status(200).json(entry[0]);
		})
		.catch((err) => {
			res.status(400).send(" single error finding entry");
		});
};

exports.addRevEntry = (req, res) => {
	const entryR = {
		id: uuid(),
		date: moment(new Date()).format("YYYY-MM-DD"),
		Question_review_1:
			"What is something you wish to have done differently?",
		Answer_review_1: req.body.Answer_review_1,
		Question_review_2: "What did you learn today?",
		Answer_review_2: req.body.Answer_review_2,
	};
	knex("entriesReview")
		.insert(entryR)
		.then((entryRev) => {
			console.log(entryRev[0]);
			res.status(201).json(entryRev[0]);
		})
		.catch(() => {
			res.status(400).send("error");
		});
};

exports.updateEntryRev = (req, res) => {
	const entryR = {
		id: uuid(),
		date: moment(new Date()).format("YYYY-MM-DD"),
		Question_review_1:
			"What is something you wish to have done differently?",
		Answer_review_1: req.body.Answer_review_1,
		Question_review_2: "What did you learn today?",
		Answer_review_2: req.body.Answer_review_2,
	};
	knex("entriesReview")
		.update(entryR)
		.where({ id: req.params.entryRevId })
		.then(() => {
			res.status(200).send("update Review entry");
		})
		.catch((err) => {
			res.status(400).send("error updating Review entry");
		});
};

exports.deleteRevEntry = (req, res) => {
	knex("entriesReview")
		.del()
		.where({ id: req.params.entryRevId })
		.then(() => {
			res.status(204).send("entry Review deleted");
		})
		.catch((err) => {
			res.status(400).send("error deleting review entry");
		});
};
