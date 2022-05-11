// Require express
const express = require("express");

// Require admin-routes, book-routes, and site-routes 
const adminRoutes = require("./admin-routes");
const siteRoutes = require("./site-routes");

// Require router
const router = express.Router();

// router.use("/admin", adminRoutes);
// router.use("/", siteRoutes);

// Make sure to export the router using module.exports()
module.exports = router;