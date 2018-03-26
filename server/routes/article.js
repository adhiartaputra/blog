const express = require('express');
const router = express.Router();
const { addArticle, showArticle, updateArticle, deleteArticle, findById } = require('../controllers/article.controller')

/* GET users listing. */
router
.post('/', addArticle)
.get('/', showArticle)
.put('/', updateArticle)
.get('/find', findById)
.delete('/', deleteArticle)

module.exports = router;