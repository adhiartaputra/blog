const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

module.exports = {

  sign_up: (req,res) => {
    const hash = bcrypt.hashSync(req.body.password, salt);
    let newUser = {
      name      : req.body.name,
      password  : hash,
      email     : req.body.email
    }
    User.create(newUser)
    .then(newList => {
      res.status(200).json({
        message : "sucessfully add new user",
        data    : newList
      })
    })
  },

  sign_in: (req,res) => {
    console.log(req.body);
    User.findOne({email: req.body.email})
    .exec()
    .then(user => {
      if (user) {
        let checkPass = bcrypt.compareSync(req.body.password, user.password)
        if (checkPass) {
          const token = jwt.sign({ id: user.id, role: user.role }, process.env.SECRET)
          res.status(201).json({
            message : "login success",
            token
          })
        } else {
          res.status(404).json({
            message : "password incorrect"
          })
        }
      } else {
        res.status(404).json({
          message : "email incorrect"
        })
      }
    })
  },

  getUser: (req,res) => {
    User.find()
    .exec
    .then( users => {
      res.status(200).json({
        message : "here's your list of user",
        data    : users
      })
    })
  },

  updateUser: (req, res) => {
    User.findOneAndUpdate({_id: req.headers._id}, {$set: req.body}, {new: true}, (err, data) => {
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

  getById: (req,res) => {
    User.findById(req.headers._id)
    .exec()
    .then(data => {
      res.status(200).json({
        message: 'here \'s your Article',
        data
      })
    })
  },

  createUser: (req,res) => {
    const hash = bcrypt.hashSync(req.body.password, salt);
    let newUser = {
      username      : req.body.username,
      password      : hash,
      role          : req.body.role
    }
    User.create(newUser)
    .then(newList => {
      res.status(200).json({
        message : "sucessfully add new user",
        data    : newList
      })
    })
  },

  deleteUser: (req,res) => {
    let idInput = req.params.id
    User.deleteOne({
      _id: idInput
    })
    .exec()
    .then(newList => {
      if(newList) {
        res.status(200).json({
          message : "sucessfully delete user",
          data    : newList
        })
      } else {
        res.status(404).json({
          message : "user not found"
        })
      }
    })
  }

}
