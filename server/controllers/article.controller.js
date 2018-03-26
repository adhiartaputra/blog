const Article = require('../models/article.model')

module.exports = {

  addArticle: (req,res) => {
    const article = new Article({
      title : req.body.title,
      content  : req.body.content
    })
    article.save((err, data) => {
      console.log(data);
      res.status(201).json({
        newArticle  : data,
        message     : 'Add article success'
      })
    })
  },

  showArticle: (req,res) => {
    Article.find()
    .exec()
    .then(data => {
      res.status(200).json({
        message: "here's your article list",
        articles: data
      })
    })
  },

  findById: (req,res) => {
    Article.findById(req.headers._id)
    .exec()
    .then(data => {
      res.status(200).json({
        message: 'here \'s your Article',
        data
      })
    })
  },

  updateArticle: (req,res) => {
    Article.findOneAndUpdate({_id: req.headers._id}, {$set: req.body}, {new: true}, (err, data) => {
      if(err) {
        res.status(404).json({
          message: err
        })
      } else {
        res.status(201).json({
          message: 'here \'s your data',
          data
        })
      }
    })
  },

  deleteArticle: (req,res) => {
    Article.deleteOne({_id: req.headers._id}, (err,r) => {
      if(err) {
        res.status(404).json({
          message: err
        })
      } else {
        res.status(200).json({
        message: 'Delete data success',
        data: r
        })
      }
    })
  }

}