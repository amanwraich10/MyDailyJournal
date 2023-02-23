const express = require("express");

const app = express();
const router = express.Router();
const fs = require("fs");
const uuid = require("uuid").v4;
app.use(express.json());

const entriesFile = "./data/entries.json";

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
		// Question_1: "What is the most important task for today?",
		Answer_1: req.body.Answer_1,
		// Question_2: "What are you looking forward to today?",
		Answer_2: req.body.Answer_2,
		// Question_3: "Daily Affirmations",
		Answer_3: req.body.Answer_3,
	};
	newEntry(entry);
	res.status(201).send("Entry added successfully");
});

router.get("/:entryId", (req, res) => {
	const entries = oldEntries();
	const singleEntry = entries.find(
		(entry) => entry.id === req.params.entryId
	);
	res.json(singleEntry);
});

router.get("/", (req, res) => {
	res.status(200).send("Main page loaded successfully");
});

module.exports = router;
