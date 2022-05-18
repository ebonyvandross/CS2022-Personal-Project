// Require Express, Express Router, and site-controller.js
const express = require("express");
const activityCtrl = require("../controllers/activity-contollers");
const router = express.Router();

// ACTIVITY ROUTES - TBD
router.route("/study-comprehension")
    .get(activityCtrl.comprehension);

router.route("/study-listening")
    .get(activityCtrl.listening);

router.route("/study-math")
    .get(activityCtrl.math);

router.route("/study-reading")
    .get(activityCtrl.reading);

router.route("/study-speaking")
    .get(activityCtrl.speaking);

router.route("/study-writing")
    .get(activityCtrl.writing);

module.exports = router;