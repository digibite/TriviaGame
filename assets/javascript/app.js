
$(document).ready(function () {
    var time = 30;
    var timeShow;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    $(".wrapper3").css("visibility", "hidden");
    $(".lastWrapper").css("visibility", "hidden");

    var timeOut = function () {
        setTimeout(function () {


            $(".wrapper3").css("visibility", "hidden");
            $(".lastWrapper").css("visibility", "visible");


            var q1 = $('input[type="radio"][name="sega-does"]:checked').val();
            var q2 = $('input[type="radio"][name="jurassic-director"]:checked').val();

            if (typeof q1 === 'undefined' || q1 === null) {

                unanswered++;
            }
            if (typeof q2 === 'undefined' || q1 === null) {
                unanswered++;
            }

            $("#correct").append(correct);
            $("#incorrect").append(incorrect);
            $("#unanswered").append(unanswered);
            clearInterval(timeshow);
        }, 1000)
    };


    $(".myButton").on("click", function () {

        $(".myButton").hide();
        $(".wrapper3").css("visibility", "visible");
        timeshow = setInterval(function () {
            time--;
            if (time === 0) {

                timeOut();
            }

            $("#timeLeft").html(time);
        }, 1000);

    });

    $(".btn1").click(function () {
        var answer1 = $('input[type="radio"][name="sega-does"]:checked').val();
        console.log(answer1);
        if (answer1 === "3") {
            correct++;
        } else {
            incorrect++;
        }
    }
    );

    $(".btn2").click(function () {
        var answer2 = $('input[type="radio"][name="jurassic-director"]:checked').val();
        if (answer2 === "6") {
            correct++;
        } else {
            incorrect++;
        }
    });

    $(".done").click(timeOut);
});