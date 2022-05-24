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

router.route("/news")
    .get(siteController.news);

router.route("/contact-us")
    .get(siteController.contact);

module.exports = router;