const Article = require('../models/article.model')

module.exports = {

  addArticle: (req,res) => {
    const article = new Article({
      title : req.body.title,
      text  : req.body.text
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

  updateArticle: (req,res) => {
    Article.findOneAndUpdate({_id: req.params._id}, {$set: req.body}, {upsert: true}, (err => {
        if(err) {
            res.status(404).json({
                message: err
            })
        } else {
            res.status(201).json({
                message: "update data success",
                data: req.body
            })
        }
    }))
  },

  deleteArticle: (req,res) => {
    Article.deleteOne({title: req.body.title}, (err,r) => {
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