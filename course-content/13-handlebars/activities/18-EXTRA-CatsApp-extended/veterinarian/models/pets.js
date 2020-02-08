// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var pet = {
  all: function(cb) {
    orm.all("pets", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("pets", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("pets", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("pets", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (petsController.js).
module.exports = pet;
