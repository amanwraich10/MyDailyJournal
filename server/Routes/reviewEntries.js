const router = require("express").Router();
const reviewEntriesController = require("../controllers/reviewEntriesController");

router.route("/").get(reviewEntriesController.index);

router
	.route("/:entryRevId")
	.get(reviewEntriesController.singleRevEntry)
	.put(reviewEntriesController.updateEntryRev)
	.delete(reviewEntriesController.deleteRevEntry);
router.route("/review").post(reviewEntriesController.addRevEntry);
module.exports = router;
