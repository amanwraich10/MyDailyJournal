const router = require("express").Router();
const usersController = require("../controllers/usersController");

router.route("/").get(usersController.index);
router.route("/:userId").get(usersController.showUser);
// router.route("/:id/entries").get(usersController.showEntries);
// router.route("/:id/entriesReview").get(usersController.showEntriesReview);
// router.route("/:id/quotes").get(usersController.showQuotes);

module.exports = router;
