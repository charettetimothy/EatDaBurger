var connection = require("./connection.js");

var orm = {
    all: function(burgers, cb) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, [burgers], function(err, result) {
        if (err) throw err;
        console.log(result);
        cb(result);
      });
    },
    create: function(table, columns, values, cb) {
      var queryString = "INSERT INTO ??";
      queryString += " (" + columns.toString() + ") ";
      queryString += "VALUES ??";
      console.log(queryString);
      connection.query(queryString, [table, values], function(err, result) {
        if (err) throw err;
        console.log(result);
        cb(result);
      });
    },
    update: function() {
      var queryString =
      connection.query(queryString,[],function(err, result) {
          if (err) throw err;
          console.log(result);
        }
      );
    }
  };
  
  module.exports = orm;