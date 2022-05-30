// At the top of your file where you want to generate a unique identifier, import the uuid package
const { v4: uuid } = require("uuid");

module.exports = [

  {
    _id: uuid(),
    title: "Writing exercise #1",
    link: "https://h5p.org/h5p/embed/1268975",
  },
  {
    _id: uuid(),
    title: "Writing exercise #2",
    link: "https://h5p.org/h5p/embed/1268979",
  },
  

]