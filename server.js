//DEPENDENCIES
var express = require("express");
var app = express();
var exphbs = require("express-handlebars")

//PORT
var PORT = process.env.PORT || 3002

//PUBLIC
app.use(express.static("public"));

//MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//ROUTES
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

//LISTEN
app.listen(PORT, function () {
    console.log("App is now listening at localhost:" + PORT);
});
