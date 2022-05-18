const siteData = require("../data/siteData");

module.exports = {
    admin: (request, response) => {
        response.render("pages/admin");
    }
}