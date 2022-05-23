const siteData = require("../data/siteData");

module.exports = {
    admin: (request, response) => {
        response.render("pages/admin-console");

    },

    // Will I need update properties for each topic?
    create_activity: (request, response) => {
        response.render("pages/activity-create");

    },

    // Will I need update properties for each topic?    
    update_activity: (request, response) => {
        response.render("pages/activity-update");
        
    },

    // admin_books: (request, response) => {
    //   response.render('pages/adminBooks', {
    //     copyrightYear: siteData.year,
    //     inventoryArray: booksData
    //   });
    // },

    // admin_authors: (request, response) => {
    //   response.render('pages/adminAuthors', {
    //     copyrightYear: siteData.year,
    //     authorArray: authorsData
    //   });
    // },
    // create_author: (request, response) => {
    //   response.render('pages/authorCreate', {
    //     copyrightYear: siteData.year,
    //   });
    // },
    // book_update_get: (request, response) => {
    //   const { _id } = request.params;
    //   const foundBook = booksData.find(book => book._id === _id);
    //   response.render('pages/updateBook', {
    //     copyrightYear: siteData.year,
    //     foundBook: foundBook
    //   });
    // }
}