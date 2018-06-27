'use strict'

module.exports = function (app) {
    var commentsHelper = require('../controllers/commentsController')

    // Route for all comments
    app.route('/comments')
        .get(commentsHelper.get_all_comments);

    // Route for specific comment by id
    app.route('/comments/:commentId')
        .get(commentsHelper.get_comment)
        .delete(commentsHelper.delete_comment)
}