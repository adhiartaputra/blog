const express = require('express');
const router = express.Router();
const { addArticle, showArticle, updateArticle, deleteArticle } = require('../controllers/article.controller')

/* GET users listing. */
router
.post('/', addArticle)
.get('/', showArticle)
.put('/:_id', updateArticle)
.delete('/', deleteArticle)

module.exports = router;