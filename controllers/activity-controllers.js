const siteData = require('../data/siteData');
const { v4: uuid } = require('uuid');

module.exports = {
  listening: (request, response) => {
    response.render("pages/study-listening", {
    });
  },

  math: (request, response) => {
    response.render("pages/study-math", {
    });
  },

  reading: (request, response) => {
    response.render("pages/study-reading", {
    });
  },

  speaking: (request, response) => {
    response.render("pages/study-speaking", {
    });
  },

  writing: (request, response) => {
    response.render("pages/study-writing", {
    });
  },

  // book_detail: (request, response) => {
  //   let id = request.params._id;
  //   const foundBook = booksData.find(book => book._id === String(id));
  //   response.render('pages/bookDetail', {
  //     copyrightYear: siteData.year,
  //     inventoryItem: foundBook
  //   });
  // },
  // book_create_post: (request, response) => {
  //   console.log(request.body);
  //   const { _id = uuid(), title, author, price, starRating, synopsis } = request.body;
  //   booksData.push({ _id, title, author, price, starRating, synopsis });
  //   if (title != "") {
  //     response.redirect("/admin/admin-books");
  //   } else {
  //     response.redirect("/admin/create-book");
  //   }
  // },
  // book_update_put: (request, response) => {

  //   const { _id } = request.params;

  //   const { title, author, price, starRating, synopsis } = request.body;

  //   const foundBook = booksData.find(book => book._id === String(_id));

  //   foundBook.title = title;
  //   foundBook.author = author;
  //   foundBook.price = price;
  //   foundBook.starRating = starRating;
  //   foundBook.synopsis = synopsis;

  //   response.redirect("/admin/admin-books");
  // },
  // book_delete: (request, response) => {
  //   const { _id } = request.params;
  //   const foundBook = booksData.find(book => book._id === String(_id));
  //   const index = booksData.indexOf(foundBook);
  //   booksData.splice(index, 1);
  //   response.redirect("/admin/admin-books");
  // }
}