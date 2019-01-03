// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function (burger_name, cb) {
    orm.create("burgers", function (res) {
      cb(res);
    });
  },
  update: function (id, cb) {
    var condition = "id=" + id;
    // crucial part to understand!!!!
    // translates between objects and sql 
    // basically turns into objects
    orm.update("burgers", {}, condition, cb) 
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;