const express = require("express");
const app = express();
const PORT = 3000;
const morgan = require("morgan");

app.use(morgan("combined"))

const path = require("path");
const methodOverride = require("method-override");
// const routes = require("./routes/index")

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"))
// app.use(routes);

// Data for EJS files
// TBD


// Routes
app.get("/", (request, response) => {
    response.render("pages/index")
})
app.get("/about", (request, response) => {
    response.render("pages/about")
})

app.get("/blog", (request, response) => {
    response.render("pages/blog")
})

app.get("/contact", (request, response) => {
    response.render("pages/contact")
})

app.get("/for-instructors", (request, response) => {
    response.render("pages/for-instructors")
})

app.get("/for-learners", (request, response) => {
    response.render("pages/for-learners")
})

app.get("/study-comprehension", (request, response) => {
    response.render("pages/study-comprehension")
})

app.get("/study-listening", (request, response) => {
    response.render("pages/study-listening")
})

app.get("/study-math", (request, response) => {
    response.render("pages/study-math")
})

app.get("/study-reading", (request, response) => {
    response.render("pages/study-reading")
})

app.get("/study-speaking", (request, response) => {
    response.render("pages/study-speaking")
})

app.get("/study-writing", (request, response) => {
    response.render("pages/study-writing")
})

app.get("/submit-activities", (request, response) => {
    response.render("pages/submit-activities")
})


// Server
app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});
