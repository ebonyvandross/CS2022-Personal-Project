const siteData = require("../data/siteData");
const Activity = require("../models/activity-model");

module.exports = {
    index: (request, response) => {
        response.render("pages/index", {
            name: siteData.userName,
            signedIn: siteData.signedIn
        });
    },
    about: (request, response) => {
        response.render("pages/about")
    },
    login: (request, response) => {
        response.render("pages/login")
    },
    news: (request, response) => {
        response.render("pages/news")
    },
    contact: (request, response) => {
        response.render("pages/contact-us")
    },
};
