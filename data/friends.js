var answerArr = []

$(surveySubmit).on("click", function () {
    for (i = 0; i < $("#survey")[0].length; i++) {
        answerArr.push(($("#q" + i).val()));
    }
    console.log($(answerArr));
});