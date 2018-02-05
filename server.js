var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var htmlRoutes = require('./routing/htmlRoutes.js');

var port = process.env.PORT || 3000
var app = express();

app.listen(port, () => {
    console.log('App is listening port ' + port);
});

app.use('/', htmlRoutes);
app.use('/survey', htmlRoutes);
app.use('/data/friends.js', htmlRoutes);