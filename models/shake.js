var orm = require("../config/orm.js");

var shake = {
  selectAll: function(cb) {
    orm.selectAll("shakes", function(res) {
      cb(res);
    });
  },
  insertOne: function(cols, vals, cb) {
    orm.insertOne("shakes", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("shakes", objColVals, condition, function(res) {
      cb(res);
    });
  },
  deleteOne: function(condition, cb) {
    orm.deleteOne("shakes", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = shake;
