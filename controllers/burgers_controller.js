var express = require("express");
var router = express.Router();
// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");
router.get("/", function(req, res) {
  burger.all(function(burgerData) {
    console.log(burgerData);
    res.render("index", { burger_data: burgerData });
  });
});
router.post("/burgers/create", function(req, res) {
  burger.create(req.body.burger_name, function(result) {
    res.redirect("/");
  });
});
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log(req.body.devoured)
  burger.update(
    {
      devoured: req.body.devoured
    },
    condition,
    function() {
      res.redirect("/");
    }
  );
});
router.delete("/api/burgers/:id", (req, res) => {
  let condition = "id = " + req.params.id;

  burger.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
module.exports = router;
