const knex = require("knex")(require("../knexfile"));
const uuid = require("uuid").v4;

const moment = require("moment");

exports.index = (_req, res) => {
	knex("entries")
		.select(
			"id",
			"date",
			"Question_1",
			"Answer_1",
			"Question_2",
			"Answer_2",
			"Question_3",
			"Answer_3"
		)
		.then((entries) => {
			res.status(200).json(entries);
		})
		.catch((err) => {
			res.status(400).send("error");
		});
};

exports.singleEntry = (req, res) => {
	// console.log(req.params.entryId);
	knex("entries")
		.where({ id: req.params.entryId })
		.then((entry) => {
			res.status(200).json(entry);
		})
		.catch((err) => {
			console.log(err);
			res.status(400).send("error h finding entry");
		});
};

exports.addEntry = (req, res) => {
	const entry = {
		id: uuid(),
		date: moment(new Date()).format("YYYY-MM-DD"),
		Question_1: "What is the most important task for today?",
		Answer_1: req.body.Answer_1,
		Question_2: "What are you looking forward to today?",
		Answer_2: req.body.Answer_2,
		Question_3: "Daily Affirmations",
		Answer_3: req.body.Answer_3,
	};
	console.log(entry);
	knex("entries")
		.insert(entry)
		.then((newentries) => {
			console.log(newentries[0]);
			res.status(201).json(newentries[0]);
		})
		.catch(() => {
			res.status(400).json({
				message: `error creating entry `,
			});
		});
};

exports.updateEntry = (req, res) => {
	// console.log(req.body);
	knex("entries")
		.update(req.body)
		.where({ id: req.params.entryId })
		.then(() => {
			res.status(200).send("update entry");
		})
		.catch((err) => {
			res.status(400).send("error updating entry");
		});
};

exports.deleteEntry = (req, res) => {
	console.log("en", req.params.entryId);
	knex("entries")
		.del()
		.where({ id: req.params.entryId })
		.then(() => {
			res.status(204).send("entry deleted");
		})
		.catch((err) => {
			res.status(400).send("error deleting entry");
		});
};
