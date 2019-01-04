var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/burgers", function(req, res) {
  burger.all(function(burgerData) {
    
    console.log(burgerData)
    res.render("index", {burger_data: burgerData},);
  });
});

// res for response only!!!

router.post("/burgers/create", function(req, res) {
  // burger_name needs to be the 'name' when i create index handlebars
  burger.create(req.body.burger_name, function(result) {
    // Send back the ID of the new quote
    // dont need line 23
    // res.json({ id: result.insertId });
    console.log(result)
  });
});
// put is editing something that already exists
router.put("/api/cats/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  cat.update(
    {
      sleepy: req.body.sleepy
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

// Export routes for server.js to use.
module.exports = router;