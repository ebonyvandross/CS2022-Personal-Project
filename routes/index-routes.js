const express = require("express");

const siteRoutes = require("./site-routes");
const adminRoutes = require("./admin-routes");
const activityRoutes = require("./activity-routes");

const router = express.Router();

router.use("/", siteRoutes);
router.use("/activities", activityRoutes);
router.use("/admin", adminRoutes);

module.exports = router;