'use strict'

var mongoose = require('mongoose'),
    Comment = mongoose.model('Comment');

// Retrieve all comments from mongo
exports.get_all_comments = function (req, res) {
    Comment.find({}, function (err, comment) {
        if (err) {
            res.send(err);
        }
        res.json(comment);
    });
};

// Retrieve specific comment by id from mongo
exports.get_comment = function (req, res) {
    Comment.findById(req.params.commentId, function (err, comment) {
        if (err) {
            res.send(err);
        }
        res.json(comment);
    })
}

// Delete specific comment by id from mongo
exports.delete_comment = function (req, res) {
    Comment.remove({_id: req.params.commentId}, function (err, comment) {
        if (err) {
            res.send(err);
        }
        res.json('Deleted comment with id ' + req.params.commentId);
    })
}