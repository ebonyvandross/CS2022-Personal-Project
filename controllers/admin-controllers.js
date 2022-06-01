const siteData = require("../data/siteData");
const Activity = require("../models/activity-model");

module.exports = {
    admin: (request, response) => {
        if (request.isAuthenticated()) {
            response.render("pages/admin");
        } else {
            response.redirect("/login")
        }
    },

    // Will I need update properties for each topic?
    // create_activity: (request, response) => {
    //     response.render("pages/activity-create");

    // },

    create_activity: (request, response) => {
        if (request.isAuthenticated()) {
            response.render("pages/activity-create");
        } else {
            response.redirect("/login")
        }
    },

    // Will I need update properties for each topic?    
    // update_activity: (request, response) => {
    //     response.render("pages/activity-update");
    // },

    update_activity: (request, response) => {
        if (request.isAuthenticated()) {
            response.render("pages/activity-update");
        } else {
            response.redirect("/login")
        }
    },

}
