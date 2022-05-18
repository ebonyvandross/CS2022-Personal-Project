// Require express
const express = require("express");

// Require admin-routes, book-routes, and site-routes 
const siteRoutes = require("./site-routes");
const adminRoutes = require("./admin-routes");

// Require router
const router = express.Router();

router.use("/", siteRoutes);
router.use("/admin", adminRoutes);

// Make sure to export the router using module.exports()
module.exports = router;