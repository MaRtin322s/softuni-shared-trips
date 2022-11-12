const router = require('express').Router();
const homeController = require("./controllers/homeController");
const authController = require("./controllers/authController");
const tripController = require("./controllers/tripController");

router.use('/', homeController);
router.use('/trips', tripController);
router.use('/auth', authController);
router.get("*", (req, res) => { res.render("404") });

module.exports = router;