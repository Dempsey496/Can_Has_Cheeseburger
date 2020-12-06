const express = require("express");

const router = express.Router();

// Importing the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");



// GET route
router.get("/", (req, res) => {
  burger.all(data => {
    res.render("index", { burgers: data });
  });
});

// POST route
router.post("/api/burgers", (req, res) => {
  console.log("New burger POST request: ", req.body)
  burger.create(["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    result => {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
});

//PUT route
router.put("/api/burgers/:id", (req, res) => {
  console.log("Incoming UPDATE request: ", req.body);

  let condition = "id = " + req.params.id;

  console.log("UPDATE condition: ", condition);

  burger.update({
      devoured: req.body.devoured,
    }, condition, result => {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});


router.delete("/api/burgers/:id", (req, res) => {
  let condition = "id = " + req.params.id;

  burger.delete(condition, result => {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.get("*", (req, res) => {
  res.redirect("/")
});

module.exports = router;
