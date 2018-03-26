const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  name: {
    type: String,
    default: 'Someone'
  },
  password: {
    type: String
  },
  email: {
    type: String
  }
},{
  timestamps: true
});

module.exports = mongoose.model('Article', articleSchema);