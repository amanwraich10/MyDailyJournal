const router = require("express").Router();
const profileController = require("../controllers/profileController");

router.route("/").get(profileController.index);
// router.route("/:userId").get(profileController.seeUser);
module.exports = router;
