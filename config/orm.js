var connection = require("./connection.js");
// Helper function for SQL syntax. We want to pass 3 values into query.
// We need 3 question marks. Loops through and creates array of question marks - ["?", "?", "?"]
// turns it into a string. ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}
var orm = {
  all: function (burgers, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [burgers], function (err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
  create: function (table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";
    connection.query(queryString, vals, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  update: function (table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;
    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

module.exports = orm;