var userArr = []
var answerArr = []

$(surveySubmit).on("click", function () {
    for (i = 0; i < $("#survey")[0].length; i++) {
        answerArr.push(($("#q" + i).val()));
    }
    var newUser = {
        name: $('#nameInput').val(),
        url: $('#photoInput').val(),
        surveyAnswers: answerArr
    };
    $.post("/api/new", newUser)
        .then(function (data) {
            console.log(data);
            alert("Adding User");
        });
});




  