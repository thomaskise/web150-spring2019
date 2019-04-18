// assignment2.js gets user input and prepares it for output

//define vars 
    var userName;
    var welcome;
    var calcLeader;
    var plusSign;
    var isEqual;
    var addend1;
    var addend2;
    var sum;

//initialize static vars
    var welcome = 'Hi ';
    var calcLeader = 'The sum of ';
    var explainationPoint = '! '
    var plusSign = ' + ';
    var isEqual = ' is ';

//get user unput
    var userName = prompt("Please enter your name: ", "");
    console.log(userName);

    var addend1 = parseInt(prompt("Enter a number: ", "2"), 10);
    console.log(addend1);

    var addend2 = parseInt(prompt("Enter another number: ", "5"), 10);
    console.log(addend2);

//do the math
    var result = addend1 + addend2;

//Display using get elements by id
    //get calculation
    var elCalc = document.getElementById("calculation");
    //concatenate vars in elCalc for single line rendering
    elCalc.textContent = 
        (welcome + userName + explainationPoint + calcLeader +  
         addend1 + plusSign + addend2 + isEqual + result);