var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    Comment = require('./models/commentsModel'),
    bodyParser = require('body-parser');

// Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/streddit');

// Use BodyParser for POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Include routes for app
var routes = require('./routes/commentsRouter');
routes(app);

app.listen(3000, () => console.log('Listening on port 3000!'));