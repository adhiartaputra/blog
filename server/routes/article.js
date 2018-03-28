const express = require('express');
const router = express.Router();
const { addArticle, showArticle, updateArticle, deleteArticle, findById } = require('../controllers/article.controller')
const { auth } = require('../middleware/auth')

/* GET users listing. */
router
.post('/', auth, addArticle)
.get('/', auth, showArticle)
.put('/', auth, updateArticle)
.get('/find', auth, findById)
.delete('/', auth, deleteArticle)

module.exports = router;