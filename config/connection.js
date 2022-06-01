const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/letsstartLearning", {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
  if(!err) {
    console.log("Successful connection with MongoDB Server");  
  }
  else {
      console.log("Error with MongoDB's connectivity");
      console.log(err)
  }
});