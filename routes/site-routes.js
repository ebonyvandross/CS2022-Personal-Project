// Require Express, Express Router, and site-controller.js
const express = require("express");
const siteController = require("../controllers/site-controllers");
const router = express.Router();

// SITE ROUTES
router.route("/")
    .get(siteController.index);

router.route("/about")
    .get(siteController.about);

router.route("/login")
    .get(siteController.login);

module.exports = router;