// Require Express, Express Router, and site-controller.js
const express = require("express");
const adminCtrl = require("../controllers/admin-controllers");
const router = express.Router();

// SITE ROUTES - TBD
router.route("/admin")
    .get(adminCtrl.admin);

// router.route("/admin-console/add-activity")
//     .get(adminCtrl.add);

// router.route("/update-activity/:id")
//     .get(adminCtrl.update);

module.exports = router;