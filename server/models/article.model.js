const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title       : {
    type: String,
    default: 'Untitled'
  },
  text        : {
    type: String,
    default: null
  },
},{
  timestamps: true
});

module.exports = mongoose.model('Article', articleSchema);