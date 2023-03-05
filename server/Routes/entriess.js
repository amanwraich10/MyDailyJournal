const router = require("express").Router();
const entriesController = require("../controllers/entriesController");
router
	.route("/:entryId")
	.get(entriesController.singleEntry)
	.put(entriesController.updateEntry)
	.delete(entriesController.deleteEntry);

// router.route("/:entryId").get(entriesController.singleEntry);

router.route("/").get(entriesController.index);
// .put(entriesController.updateEntry)

router.route("/add").post(entriesController.addEntry);

module.exports = router;
