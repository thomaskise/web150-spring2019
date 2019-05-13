//assignment5.js accepts user input as numeric values between 0 & 100 and outputs the average
           
//vars - define & initialize
var testScore   = 0;
var totalScore  = 0;
var avgScore    = 0;
var entries     = 0;
var msg         = 'No test scores where entered.\nPlease start over.';
var badinputmsg = 'The value you entered was not numeric between 0 and 100. \nTry your entry again.';

while (testScore !== 999) {
    //prompt the user for input
    testScore = parseInt(prompt("Enter a numeric score 0 - 100 \nor enter 999 to see your average.", 50));
    
    //if 999 entered, do nothing - fall through and deliver final message
    if (testScore == 999){
        //do nothing
    
    //process if entry betweem 0 & 100
    }else if (testScore >= 0 && testScore <= 100 ){
        totalScore += testScore; // add entered testScore to totalScore
        entries ++; // Increment the entry count
        avgScore = totalScore / entries; //compute the average
        msg = 'Your average score is ' + avgScore + '.'; //format the message
    
    //advise user of invalid entry
    }else {
        alert(badinputmsg);
    }
} 

//Output the final message
alert(msg);