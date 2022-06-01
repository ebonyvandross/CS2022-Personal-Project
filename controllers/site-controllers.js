const User = require("../models/user-model");
const Activity = require("../models/activity-model");
const siteData = require("../data/siteData");
const passport = require("passport");

module.exports = {
    index: (request, response) => {
        response.render("pages/index", {
            name: siteData.userName,
            signedIn: siteData.signedIn
        });
    },

    register_get: (request, response) => {
        response.render("pages/register", {
            copyrightYear: siteData.year
        });
    },

    register_post: (request, response) => {
        const { username, password } = request.body;
        User.register({ username: username }, password, (error, user) => {
            if (error) {
                console.log(error);
                response.redirect("/register");
            } else {
                passport.authenticate("local")(request, response, () => {
                    response.redirect("/login");
                });
            }
        });
    },

    about: (request, response) => {
        response.render("pages/about")
    },

    login_get: (request, response) => {
        response.render("pages/login");
    },

    login_post: (request, response) => {
        const { username, password } = request.body;
        const user = new User({
            username: username,
            password: password
        });

        request.login(user, (error) => {
            if (error) {
                console.log(error)
                response.redirect("/login");
            } else {
                passport.authenticate("local")(request, response, () => {
                    response.redirect("/admin");
                });
            }
        });
    },

    logout: (request, response) => {
        request.logout();
        response.redirect("/");
    },

    google_get: passport.authenticate("google", { scope: ["openid", "profile", "email"] }),

    google_redirect_get: [
        passport.authenticate("google", { failureRedirect: "/login" }),
        function (request, response) {
            response.redirect("/admin");
        },
    ],

    news: (request, response) => {
        response.render("pages/news")
    },

    contact: (request, response) => {
        response.render("pages/contact-us")
    },

};
