var express = require('express')
var router = express.Router()
var path = require('path')

router.post('/api/newFriends', function (req, res) {
    // Capture the user input object
    var userInput = req.body;
    console.log('userInput = ' + JSON.stringify(userInput));

    var userResponses = userInput.surveyAnswers;
    var userName = userInput.name;
    console.log(userResponses);

    //PSuedo Again,   out of time.  exhausted.  Something along these lines for 2 for loops.  One looping through all the friends, and one checking the "abs diff" of the two arrays then seeing if its greater than the previous friend checked. Really clean... found it on git hub.  Another day and I could have nailed this HW.

    // Examine all existing friends in the list
    // for (var i = 0; i < friends.length; i++) {
    //     // console.log('friend = ' + JSON.stringify(friends[i]));

    //     // Compute differenes for each question
    //     var diff = 0;
    //     for (var j = 0; j < userResponses.length; j++) {
    //         diff += Math.abs(friends[i].scores[j] - userResponses[j]);
    //     }
    //     // console.log('diff = ' + diff);

    //     // If lowest difference, record the friend match
    //     if (diff < totalDifference) {
    //         // console.log('Closest match found = ' + diff);
    //         // console.log('Friend name = ' + friends[i].name);
    //         // console.log('Friend image = ' + friends[i].photo);

    //         totalDifference = diff;
    //         matchName = friends[i].name;
    //         matchImage = friends[i].photo;
    //     }
    // }


module.exports = router