// Import the ORM to create functions that will 
// interact with the database.
var orm = require("../config/orm.js");
var burger = {
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function (burger_name, cb) {
    orm.create("burgers", ["burger_name", " devoured"],
      [burger_name, false],
      function (res) {
        cb(res);
      });
  },
  update: function (objColVals, condition, cb) {
    orm.update("burgers", {devoured: true}, condition, function (res) {
      cb(res);
    })
  },
  delete: function (condition, cb) {
    orm.delete("burgers", condition, res => {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;