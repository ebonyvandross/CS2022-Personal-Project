// At the top of your file where you want to generate a unique identifier, import the uuid package
const { v4: uuid } = require("uuid");

module.exports = [

  {
    _id: uuid(),
    title: "Listening exercise #1",
    link: "https://h5p.org/h5p/embed/1268943",
  },
  {
    _id: uuid(),
    title: "Listening exercise #2",
    link: "https://h5p.org/h5p/embed/1268951",
  },
  {
    _id: uuid(),
    title: "Listening exercise #3",
    link: "https://h5p.org/h5p/embed/1268952",
  },

]