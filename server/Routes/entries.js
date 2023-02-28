const { json } = require("body-parser");
const bodyParser = require("body-parser");
const express = require("express");
const fsPromise = require("node:fs/promises");

const app = express();
const router = express.Router();
const fs = require("fs");
const uuid = require("uuid").v4;
app.use(express.json());

let codedParser = bodyParser.urlencoded({ extended: true });
app.use(bodyParser.json());
app.use(codedParser);
router.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

const entriesFile = "./data/entries.json";
const quotesFile = "./data/quotes.json";
const entriesReviewFile = "./data/entriesReview.json";

function oldEntries() {
	let entries = fs.readFileSync(entriesFile);
	let parsedData = JSON.parse(entries);
	return parsedData;
}

function newEntry(entry) {
	const entries = entry;
	const oldVid = oldEntries();
	const all = [...oldVid, entries];
	fs.writeFileSync(entriesFile, JSON.stringify(all));
}

router.get("/", (req, res) => {
	let entries = oldEntries();
	res.json(entries);
});

router.post("/add", (req, res) => {
	const entry = {
		id: uuid(),
		date: Date.now(),
		Question_1: "What is the most important task for today?",
		Answer_1: req.body.Answer_1,
		Question_2: "What are you looking forward to today?",
		Answer_2: req.body.Answer_2,
		Question_3: "Daily Affirmations",
		Answer_3: req.body.Answer_3,
	};
	newEntry(entry);
	res.status(201).send("Entry added successfully");
});

function oldReviewEntries() {
	let entries = fs.readFileSync(entriesReviewFile);
	let parsedData = JSON.parse(entries);
	return parsedData;
}

function newReviewEntry(entry) {
	const entries = entry;
	const oldVid = oldReviewEntries();
	const all = [...oldVid, entries];
	fs.writeFileSync(entriesReviewFile, JSON.stringify(all));
}

router.get("/rev", (req, res) => {
	let entries = oldReviewEntries();
	res.json(entries);
});
router.post("/review", (req, res) => {
	const entryR = {
		id: uuid(),
		date: Date.now(),
		Question_review_1:
			"What is something you wish to have done differently?",
		Answer_review_1: req.body.Answer_review_1,
		Question_review_2: "What did you learn today?",
		Answer_review_2: req.body.Answer_review_2,
	};
	newReviewEntry(entryR);
	res.status(201).send("Entry added successfully");
});

function oldQuote() {
	let quotes = fs.readFileSync(quotesFile);
	let parsedData = JSON.parse(quotes);
	return parsedData;
}

function newQuotes(quote) {
	const quotes = quote;
	const oldQ = oldQuote();
	const all = [...oldQ, quotes];
	fs.writeFileSync(quotesFile, JSON.stringify(all));
}

// problem - having issue with req.headers

router.post("/liked-quotes", codedParser, (req, res) => {
	const request_body = JSON.parse(JSON.stringify(req.body));
	// const text = JSON.stringify(req.body);

	const quote = {
		id: uuid(),
		text: request_body.text,
	};
	// console.log(quote);
	// console.log(req.headers);
	newQuotes(quote);
	res.status(201).send("Liked Quote");
});

router.get("/quotes", (req, res) => {
	let quotes = oldQuote();
	res.json(quotes);
});

function requestedID(req) {
	const requestId = req.params.entryId;
	// console.log(req.params.entryId);
	return requestId;
}
function requestedRevID(req) {
	const requestId = req.params.entryRevId;
	console.log("f", req.params.entryRevId);
	return requestId;
}

function getEntryInfo(entryId) {
	const entryData = oldEntries();
	const result = entryData.find(({ id }) => id === entryId);
	// console.log(result);
	return result;
}
function getRevEntryInfo(entryRevId) {
	const entryData = oldReviewEntries();
	const result = entryData.find(({ id }) => id === entryRevId);
	// console.log(result);
	return result;
}

router.get("/:entryId", (req, res) => {
	const entryInfo = getEntryInfo(requestedID(req));
	// console.log("1", entryInfo);

	if (!entryInfo) {
		return res.status(400).send("Entry ID must be valid");
	}
	const data = { ...entryInfo };
	res.status(200).json(data);
});
router.get("/rev/:entryRevId", (req, res) => {
	const entryInfo = getRevEntryInfo(requestedRevID(req));
	// console.log(entryInfo);
	if (!entryInfo) {
		return res.status(400).send("Entry ID must be valid");
	}
	const data = { ...entryInfo };
	res.status(200).json(data);
});
function updateEntryData(data, idToUpdate) {
	const database = oldEntries();

	const {
		Answer_1,
		Answer_2,
		Answer_3,
		date,
		Question_1,
		Question_2,
		Question_3,
	} = data;
	console.log(data);

	database.find((element, index) => {
		if (element.id === idToUpdate) {
			database[index] = {
				id: idToUpdate,
				date: date,
				Question_1: Question_1,

				Answer_1: Answer_1,
				Question_2: Question_2,
				Answer_2: Answer_2,
				Question_3: Question_3,
				Answer_3: Answer_3,
			};

			const newEntryData = database;
			const toWrite = newEntryData;
			fs.writeFileSync("./data/entries.json", JSON.stringify(toWrite));
		}
	});
}

function updateRevEntryData(data, idToUpdate) {
	const database = oldReviewEntries();

	const {
		Answer_review_1,
		Answer_review_2,

		date,
		Question_review_1,
		Question_review_2,
	} = data;
	console.log(data);

	database.find((element, index) => {
		if (element.id === idToUpdate) {
			database[index] = {
				id: idToUpdate,
				date: date,
				Question_review_1: Question_review_1,

				Answer_review_1: Answer_review_1,
				Question_review_2: Question_review_2,
				Answer_review_2: Answer_review_2,
			};

			const newEntryData = database;
			const toWrite = newEntryData;
			fs.writeFileSync(
				"./data/entriesReview.json",
				JSON.stringify(toWrite)
			);
		}
	});
}

router.put("/:entryId", (req, res) => {
	if (getEntryInfo(requestedID(req))) {
		updateEntryData(req.body, requestedID(req));
		return res.status(200).send("Entry updated successfully!");
	} else {
		res.status(400).send("Entry does not exist!");
	}
});

router.put("/rev/:entryRevId", (req, res) => {
	if (getRevEntryInfo(requestedRevID(req))) {
		updateRevEntryData(req.body, requestedRevID(req));
		return res.status(200).send("Entry updated successfully!");
	} else {
		res.status(400).send("Entry does not exist!");
	}
});

router.get("/", (req, res) => {
	res.status(200).send("Main page loaded successfully");
});

function deleteEntry(idToDelete) {
	const Database = oldEntries();
	for (i = 0; i < Database.length; i++) {
		if (Database[i].id === idToDelete) {
			Database.splice(i, 1);
			break;
		}
	}
	let success = false;

	return fsPromise
		.writeFile("./data/entries.json", JSON.stringify(Database))
		.then((error) => {
			console.log("first await");
			if (error) {
				return false;
			} else {
				return fsPromise
					.writeFile("./data/entries.json", JSON.stringify(Database))
					.then((error) => {
						console.log(error);
						success = true;
						return success;
					});
			}
		});
}

function deleteRevEntry(idToDelete) {
	const Database = oldReviewEntries();
	for (i = 0; i < Database.length; i++) {
		if (Database[i].id === idToDelete) {
			Database.splice(i, 1);
			break;
		}
	}
	let success = false;

	return fsPromise
		.writeFile("./data/entriesReview.json", JSON.stringify(Database))
		.then((error) => {
			console.log("first await");
			if (error) {
				return false;
			} else {
				return fsPromise
					.writeFile(
						"./data/entriesReview.json",
						JSON.stringify(Database)
					)
					.then((error) => {
						console.log(error);
						success = true;
						return success;
					});
			}
		});
}

router.delete("/rev/:entryRevId", (req, res) => {
	if (getRevEntryInfo(requestedRevID(req))) {
		deleteRevEntry(requestedRevID(req)).then((success) => {
			console.log("route returning: ", success);
			if (success === true) {
				return res.status(200).send("and it is gone....!");
			} else {
				res.status(400).send("The system fucked up :(");
			}
		});
	} else {
		res.status(400).send("Entry does not exist.");
	}
});

module.exports = router;
