var express = require('express')
var router = express.Router()
var commentsHelper = require('../controllers/commentsController')

// Route for all comments
router.route('/')
    .get(commentsHelper.get_all_comments)

// Route for specific comment by id
router.route('/:commentId')
    .get(commentsHelper.get_comment)
    .delete(commentsHelper.delete_comment)

module.exports = router