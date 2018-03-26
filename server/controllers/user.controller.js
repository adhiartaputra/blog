const User = require('../models/user.model')

module.exports = {

  addUser: (req,res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password 
    })
    user.save((err, data) => {
      console.log(data);
      res.status(201).json({
        newUser: data,
        message: 'Add user success'
      })
    })
  },

  showUser: (req,res) => {
    User.findById(req.params._id)
    .exec()
    .then(data => {
      res.status(200).json({
        message: "here's your profile ",
        users: data
      })
    })
  },

  updateUser: (req,res) => {
    User.findOneAndUpdate({_id: req.params._id}, {$set: req.body}, {upsert: true}, (err => {
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

  deleteUser: (req,res) => {
    User.deleteOne({name: req.body.name}, (err,r) => {
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