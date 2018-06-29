var express = require('express')
var app = express()
var mongoose = require('mongoose')
var Comment = require('./models/commentsModel')
var bodyParser = require('body-parser')
var cors = require('cors')

// Connect to MongoDB
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/streddit')

// Enable CORS
app.use(cors())

// Use BodyParser for POST
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Include routes for app
var comments = require('./routes/commentsRouter')
app.use('/comments', comments)

app.listen(3000, () => {
    console.log("API listening on port 3000")
})