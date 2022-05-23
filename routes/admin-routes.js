// Require Express, Express Router, and admin-controllers.js
const express = require("express");
const adminController = require("../controllers/admin-controllers");
const router = express.Router();

// ADMIN ROUTES
router.route("/")
    .get(adminController.admin);

router.route("/activity-create")
    .get(adminController.create_activity);

router.route("/activity-update")
    .get(adminController.update_activity);

// router.route("/add-activity")
//     .get(adminController.add);

// router.route("/update-activity/:id")
//     .get(adminController.update);

module.exports = router;