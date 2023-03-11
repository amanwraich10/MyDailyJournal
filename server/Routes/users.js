const router = require("express").Router();
const usersController = require("../controllers/usersController");

router.route("/").get(usersController.index);
router.route("/:userId").get(usersController.showUser);

module.exports = router;
