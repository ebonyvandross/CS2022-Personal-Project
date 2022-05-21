// Require express
const express = require("express");

// Require router
const router = express.Router();

// Require routes 
const siteRoutes = require("./site-routes");
const adminRoutes = require("./admin-routes");
const activityRoutes = require("./activity-routes");

// ???
router.use("/", siteRoutes);
router.use("/admin", adminRoutes);
router.use("/activities", activityRoutes);

// Make sure to export the router using module.exports()
module.exports = router;