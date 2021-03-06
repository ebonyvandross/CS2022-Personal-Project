const express = require("express");
const adminController = require("../controllers/admin-controllers");
const router = express.Router();

router.route("/")
    .get(adminController.admin);

router.route("/admin-listening")
    .get(adminController.admin_listening);

router.route("/admin-math")
    .get(adminController.admin_math);

router.route("/admin-reading")
    .get(adminController.admin_reading);

router.route("/admin-speaking")
    .get(adminController.admin_speaking);

router.route("/admin-writing")
    .get(adminController.admin_writing);

router.route("/activity-create")
    .get(adminController.create_activity);

router.route("/activity")
    .post(adminController.post_activity);

router.route("/:_id/activity-update")
    .get(adminController.activity_update_get);

router.route("/:_id")
    // .get(adminController.activity_detail_get)
    .put(adminController.activity_update_put)
    .delete(adminController.activity_delete)

module.exports = router;