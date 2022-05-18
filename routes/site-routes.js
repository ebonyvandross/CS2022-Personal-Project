// Require Express, Express Router, and site-controller.js
const express = require("express");
const siteCtrl = require("../controllers/site-controllers");
const router = express.Router();

// SITE ROUTES
router.route("/")
    .get(siteCtrl.index);

// router.route("/about")
//     .get(siteCtrl.about);

// router.route("/login")
//     .get(siteCtrl.login);

module.exports = router;