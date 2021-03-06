const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title       : {
    type: String,
    default: 'Untitled'
  },
  content        : {
    type: String,
    default: 'No Content Available'
  },
},{
  timestamps: true
});

module.exports = mongoose.model('Article', articleSchema);