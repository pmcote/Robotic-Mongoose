var mongoose = require('mongoose');

// Create a Schema
var robotSchema = mongoose.Schema({
  name: String,
	abilities: [String],
  isEvil: Boolean
});

// Use your schema to create a model that you can use in your app
module.exports = mongoose.model("robot", robotSchema);
