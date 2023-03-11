const router = require("express").Router();
const profileController = require("../controllers/profileController");

router.route("/").get(profileController.index);
module.exports = router;
