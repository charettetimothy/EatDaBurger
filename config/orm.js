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
      var queryString = "INSERT INTO ?? (??) VALUES (??)";
      console.log(queryString);
      connection.query(queryString, [table, columns, values], function(err, result) {
        if (err) throw err;
        console.log(result);
        cb(result);
      });
    },
    update: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
      var queryString =
        "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";
  
      connection.query(
        queryString,
        [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
        function(err, result) {
          if (err) throw err;
          console.log(result);
        }
      );
    }
  };
  
  module.exports = orm;