var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    Comment = require('./models/commentsModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/streddit');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/commentsRouter');
routes(app);

app.listen(3000, () => console.log('Listening on port 3000!'));