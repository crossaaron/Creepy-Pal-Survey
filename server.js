var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var htmlRoutes = require('./routing/htmlRoutes.js');

var port = process.env.PORT || 3000
var app = express();

var users = [];
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(port, () => {
    console.log('App is listening port ' + port);
});


// Create New Users - takes in JSON input
app.post("/api/new", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newUser = req.body;
    // Using a RegEx Pattern to remove spaces from newUser
    newUser.routeName = newUser.name.replace(/\s+/g, "").toLowerCase();

    console.log(newUser);

    users.push(newUser);

    res.json(newUser);
});

app.get('/api/new', function (req, res) {
    res.json(users);
});

app.use('/', htmlRoutes);
app.use('/survey', htmlRoutes);
app.use('/data/friends.js', htmlRoutes);

