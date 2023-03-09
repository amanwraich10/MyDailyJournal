const router = require("express").Router();
const quotesController = require("../controllers/QuotesController");

router.route("/").get(quotesController.index);
router.route("/liked-quotes").post(quotesController.addQuote);

module.exports = router;
