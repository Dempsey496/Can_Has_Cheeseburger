const orm = require("../config/orm.js");

const burger = {
    all: function (cb) {
      orm.all("burgers", (res) => {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
      orm.create("burgers", cols, vals, (res) => {
        cb(res);
      });
    },
    update: function (objColVals, condition, cb) {
      orm.update("burgers", objColVals, condition, (res) => {
        cb(res);
      });
    },
    delete: function (condition, cb) {
      orm.delete("burgers", condition, res => {
        cb(res);
      });
  }
  };
  
  // Export the database functions for the controller.
  module.exports = burger;