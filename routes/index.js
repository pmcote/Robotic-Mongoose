var mongoose = require('mongoose');
var Robot = require('../models/robotModel.js');

var routes = {};

routes.home = function(req, res) {
  Robot.find({}, function(err, robots){
    var Robots = {robots : robots};
    res.render('robots', Robots);
  });
}

module.exports = routes;
