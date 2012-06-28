###
Error-Wrapper
Author : Fadrizul H. <fadrizul@gmail.com>
###


# Load dependencies
# ======================================================================================================================
util = require "util"


# Wrapping function for other functions
# ----------------------------------------------------------------------------------------------------------------------
wrap = (fn, callback) ->
  if arguments.length is 1
    callback = (err) ->
      util.log util.inspect err
      console.error err.stack

  return (error, results...) ->
    return callback error if error
    try

      fn.apply this, results
    catch error
      callback error


# Exports the function
# ----------------------------------------------------------------------------------------------------------------------
module.exports = wrap
