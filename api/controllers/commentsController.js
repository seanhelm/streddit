var mongoose = require('mongoose')
var Comment = mongoose.model('Comment')

// Retrieve all comments from mongo
exports.get_all_comments = function (req, res, next) {
    Comment.find({}, function (err, comment) {
        if (err) {
            next(err)
        } else {
            res.json(comment)
        }
    })
}

// Retrieve specific comment by id from mongo
exports.get_comment = function (req, res, next) {
    Comment.findById(req.params.commentId, function (err, comment) {
        if (err) {
            next(err)
        } else {
            res.json(comment)
        }
    })
}

// Delete specific comment by id from mongo
exports.delete_comment = function (req, res, next) {
    Comment.findByIdAndDelete(req.params.commentId, function (err, comment) {
        if (err) {
            next(err)
        } else {
            res.json(comment)
        }
    })
}