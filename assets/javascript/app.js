//Global variables
var time = 240;
var correct = 0;
var wrong = 0;
var noAnswer = 0;
var btName = ["bt1", "bt2", "bt3", "bt4", "bt5", "bt6", "bt7", "bt8", "bt9", "bt10", "bt11"];
var answers = [];

$(document).ready(function() {
   
    //function to go through the user answers and tally number correct, wrong, and unanswered
   function tallyScore() {
        for(j = 0; j < btName.length; j++) {
            //looks up the value of the chosen answer
            var bVal = $('input[name=' + btName[j] + ']:checked').val();
            console.log(bVal);
            //Puts the value of the chosen answer into an array
            answers.push(bVal);
            //Add a point to the correct answer score
            if(bVal == 1){
                correct++;
            }
            //Add a point to the wrong answer score
            else if(bVal == 0){
                wrong++;
            }
            //Add a point to the not answered score
            else {
                noAnswer++;
            }
        };
            //prints the answers array to console
            console.log(answers);
            console.log("Number of correct answers: " + correct);
            console.log("Number of wrong answers: " + wrong);
            console.log("Number of questions not answered: " + noAnswer);
        
        //Show the number of right and wrong answers
        $("#quiz").html("<h3>Correct Answers: " + correct + "</h3><h3>Incorrect Answers: " + wrong + "</h3><h3>Unasnwerd Questions: " + noAnswer + "</h3>");

    };

    //End the quiz and count right and wrong answers
    $("#submit").click(tallyScore);
    //Timer that begins when the page loads
    setInterval(function(){
        time--;
        //End the quiz if time expires
        if (time == 0) {
            tallyScore();
        }
        mins = Math.floor(time / 60);
        secs = time % 60;
        //Update the onscreen timer every second
        if (secs < 10) {
            $("#timer").html("<h2>Time Remaining: " + mins + ":" + "0" + secs + "</h2>");
        }
        else {
            $("#timer").html("<h2>Time Remaining: " + mins + ":" +  secs + "</h2>");          
        }
    }, 1000
        
    );

});
