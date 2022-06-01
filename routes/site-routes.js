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
    .get(siteController.login_get)
    .post(siteController.login_post)

router.route("/register")
    .get(siteController.register_get)
    .post(siteController.register_post)

router.route("/auth/google")
    .get(siteController.google_get)

router.route("/auth/google/admin")
    .get(siteController.google_redirect_get)

router.route("/logout")
    .get(siteController.logout)

router.route("/news")
    .get(siteController.news);

router.route("/contact-us")
    .get(siteController.contact);

module.exports = router;