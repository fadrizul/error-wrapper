/*
Error-Wrapper
Author : Fadrizul H. <fadrizul@gmail.com>
*/
var util, wrap,
  __slice = Array.prototype.slice;

util = require("util");

wrap = function(fn, callback) {
  if (arguments.length === 1) {
    callback = function(err) {
      util.log(util.inspect(err));
      return console.error(err.stack);
    };
  }
  return function() {
    var error, results;
    error = arguments[0], results = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    if (error) return callback(error);
    try {
      return fn.apply(this, results);
    } catch (error) {
      return callback(error);
    }
  };
};

module.exports = wrap;
