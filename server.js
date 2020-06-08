const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");
const connection = require("./config/connection");
var isAuthenticated = require("./config/middleware/isAuthenticated");

const app = express();
const PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

require("./controllers/html-routes.js")(app);
require("./controllers/api-routes.js")(app);
require("./controllers/post-api-routes.js")(app);

app.get("/members", isAuthenticated, function(req, res) {
  connection.query("SELECT * FROM Posts;", function(err, data) {
    if (err) {
      throw err;
    }
    console.log("reached");
    res.render("members", { Posts: data });
  });
});

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
 });
