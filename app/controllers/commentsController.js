'use strict'

var mongoose = require('mongoose'),
    Comment = mongoose.model('Comment');

exports.get_all_comments = function (req, res) {
    Comment.find({}, function (err, comment) {
        if (err) {
            res.send(err);
        }
        res.json(comment);
    });
};