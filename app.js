const express = require("express");
const morgan = require("morgan");
const path = require("path");
const methodOverride = require("method-override");
const routes = require("./routes/index-routes")
const app = express();
const PORT = 3000;

// app.use(morgan("combined"))


// Set view engine to ejs
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"))
app.use(routes);

// Data for EJS files
// TBD

// Routes
app.get("/blog", (request, response) => {
    response.render("pages/blog")
})

app.get("/contact-us", (request, response) => {
    response.render("pages/contact-us")
})

app.get("/submit-activities", (request, response) => {
    response.render("pages/submit-activities")
})

// Server
app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});
