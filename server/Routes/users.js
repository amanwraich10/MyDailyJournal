const router = require("express").Router();
const usersController = require("../controllers/usersController");

router.route("/").get(usersController.index);
router.route("/:id").get(usersController.showUser);
router.route("/:id/entries").get(usersController.showEntries);
router.route("/:id/entriesReview").get(usersController.showEntriesReview);
// router.route("/:id/quotes").get(usersController.showQuotes);

router
	.route("/entries/:entryId")
	.get(usersController.singleEntry)
	.put(usersController.updateEntry)
	.delete(usersController.deleteEntry);

router.route("/entries").get(usersController.index2);

router.route("/entries/add").post(usersController.addEntry);

module.exports = router;
