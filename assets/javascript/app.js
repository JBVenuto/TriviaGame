//Global variables
var correct = 0;
var wrong = 0;
var noAnswer = 0;
var btName = ["bt1", "bt2", "bt3", "bt4", "bt5", "bt6", "bt7", "bt8", "bt9", "bt10", "bt11"];
var answers = [];

$(document).ready(function() {
    //Start quiz when the user clicks the start button
    $("#start").click()

    //Timer that begins when the page loads

    //Action to take when the submit button is pressed
    $("#submit").click(function() {
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
            else if(bVal == 0){
                wrong++;
            }
            else {
                noAnswer++;
            }
        }
            //prints the answers array to console
            console.log(answers);
            console.log("Number of correct answers: " + correct);
            console.log("Number of wrong answers: " + wrong);
            console.log("Number of questions not answered: " + noAnswer);
        
        //Add a point to the correct answer score

        //Add a point to the incorrect answer score

        //Show the number of right and wrong answers

    })
});

//store button names in an array
//for name go through the array
//turn the value into an integer parseInt(value, 10)  //the ten signifies base 10
//push value into a new array
//find the sum of all the array values