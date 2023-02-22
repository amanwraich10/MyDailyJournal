const express = require("express");

const app = express();
const router = express.Router();
const fs = require("fs");
const uuid = require("uuid").v4;
app.use(express.json());

const entriesFile = "./data/entries.json";
