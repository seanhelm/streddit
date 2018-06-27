'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    permalink: String,
    subreddit: String,
    link_title: String,
    author: String,
    body: String,
    created: Date,
    polarity: Number
});

module.exports = mongoose.model('Comment', CommentSchema);