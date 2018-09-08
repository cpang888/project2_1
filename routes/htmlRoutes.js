// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
//var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
  // index route loads view.html

  app.get("/", function(req, res) {
    console.log("========================");
    res.render("index");
  });

  // index route loads view.html
  app.get("/user", function(req, res) {
    res.render("adminuser");
  });

  // index route loads view.html
  app.get("/car", function(req, res) {
    res.render("admincar");
  });
};
