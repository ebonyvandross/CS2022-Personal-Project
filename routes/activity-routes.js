const express = require("express");
// const siteController = require("../controllers/site-controllers");
const activityController = require("../controllers/activity-controllers");
const router = express.Router();

router.route("/study-listening")
    .get(activityController.listening_activities);

router.route("/study-math")
    .get(activityController.math_activities);

router.route("/study-reading")
    .get(activityController.reading_activities);

router.route("/study-speaking")
    .get(activityController.speaking_activities);

router.route("/study-writing")
    .get(activityController.writing_activities);

router.route("/submit-activities")
    .get(activityController.submit_activities);

module.exports = router;