const express = require('express');
const router = express.Router();
const { getUser, getById, createUser, deleteUser, updateUser, sign_up, sign_in} = require('../controllers/user.controller');
const { auth } = require('../middleware/auth')

/* GET users listing. */
router.get('/', auth, getUser);
router.get('/:id', auth, getById);

router.post('/signup', sign_up)
router.post('/', auth, createUser)
router.post('/signin', sign_in)

module.exports = router;