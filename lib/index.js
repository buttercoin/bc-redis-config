'use strict';
var redis;

redis = require('redis');

module.exports = function(options) {
  var client, setClient;
  if (options == null) {
    client = redis.createClient();
  } else {
    client = redis.createClient(options.port, options.host, options.options);
  }
  client.on("error", function(err) {
    return console.log("Error", err);
  });
  return setClient = function(req, res, next) {
    res.redisclient = client;
    return next();
  };
};
