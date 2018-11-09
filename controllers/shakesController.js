var express = require("express");
var router = express.Router();
var shake = require("../models/shake.js");

// Create routes
router.get("/", function(req, res) {
  shake.selectAll(function(data) {
    var hbsObject = {
      shakes: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/shakes", function(req, res) {
  shake.insertOne([
    "name", "devoured"
  ], [
    req.body.name, req.body.devoured
  ], function(result) {
    // Send back the id of the new shake
    res.json({ id: result.insertId });
  });
});

router.put("/api/shakes/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  shake.updateOne({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/shakes/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  shake.deleteOne(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
