//assignment4.js executes code to accept a numeric input and return a letter grade
           
//vars - define & initialize
var numericGrade = 0;
var msg = 'Number grade = ';

//get user input & add it to the msg for output
numericGrade = parseInt(prompt("Enter a numeric grade 0 - 100.", 100));
msg += numericGrade + '\n';

//set up the second line of display
msg += 'Letter grade = ';

//select the letterGrade base on user input
if (numericGrade == 999){
    msg = 'Good bye';
} else if (numericGrade > 100){
    msg = 'Not a valid input';
} else if (numericGrade >= 88){
    msg += 'A';
} else if (numericGrade >= 80){
    msg += 'B';
} else if (numericGrade >= 68){
    msg += 'C';
}  else if (numericGrade >= 60){
    msg += 'D';
} else if (numericGrade >= 0){
    msg += 'F';
} else {
    msg = 'Not a valid input';
};

//Output the response
alert(msg);