const router = require("express").Router();
const quotesController = require("../controllers/QuotesController");

router.route("/").get(quotesController.index).post(quotesController.addQuote);
router.route("/liked-quotes").post(quotesController.addQuote);

module.exports = router;
