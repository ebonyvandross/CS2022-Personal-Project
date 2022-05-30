// At the top of your file where you want to generate a unique identifier, import the uuid package
const { v4:uuid } = require("uuid");

module.exports = [
  
  {
    _id: uuid(),
    title: "Speaking exercise #1",
    link: "https://h5p.org/h5p/embed/1268967",
  },
  {
    _id: uuid(),
    title: "Speaking exercise #2",
    link: "https://h5p.org/h5p/embed/1268969",
  },
  {
    _id: uuid(),
    title: "Speaking exercise #3",
    link: "https://h5p.org/h5p/embed/1268973",
  },
  
  ]