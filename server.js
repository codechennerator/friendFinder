//Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const path  = require("path");

//Express App
var app = express();
var PORT = process.env.PORT || 8080;

//Data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);
//Start server listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});