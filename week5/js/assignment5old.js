//assignment5.js executes code to accept and average input numbers
           
//vars - define & initialize
var testScore = 0;
var totalScore = 0;
var avgScore = 0;
var entries = 0;
var msg = 'No test scores where entered';

do {
    //get user input
    testScore = parseInt(prompt("Enter a numeric score 0 - 100 \nor enter 999 to see your average.", 95));
    console.log(testScore);
    //test input and process if not 999 (user request to end)
           
    //check for valid entry
    if (testScore === 999)
    {
        entries = entries
    } 
    else if (testScore >= 0 && testScore <= 100 )
    {//process entry if withi required range
        totalScore += testScore; // add entered testScore to totalScore
        entries ++; // Increment the entry count
        avgScore = totalScore / entries; //compute the average
        msg = 'Your average score is ' + avgScore + '.'; //format the message
    }else 
    {//process alert if not within required range
        testScore = 0;
        msg = 'The value you entered was not numeric between 0 and 100. \nTry your entry again.';
        alert(msg);
        msg = 'Your average score is ' + avgScore + '.'; //format the message
    }
    console.log(msg);
    
} while (testScore !== 999)

//Output the response
alert(msg);