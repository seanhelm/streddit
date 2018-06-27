'use strict'

module.exports = function (app) {
    var commentsHelper = require('../controllers/commentsController')

    app.route('/comments')
        .get(commentsHelper.get_all_comments);
}