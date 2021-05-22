const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
  sem: { type: String, required: true },
  subject: { type: String, required: true },
  name: { type: String, required: true },
  imagePath: { type: String },
  chapter:{ type: String, required:true },
  userid:{ type:String, required:true },
});

module.exports = mongoose.model('Profile', profileSchema);