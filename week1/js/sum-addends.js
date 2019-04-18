//sum-addends.js sums two addends and gets the value  of addneds and sum for page rendering
//define vars for welcome, addends, sum
    var welcome;
    var calcLeader;
    var plusSign;
    var isEqual;
    var addend1;
    var addend2;
    var sum;

//initialize vars
    var welcome = 'Welcome to my calculator';
    var calcLeader = 'The sum of ';
    var plusSign = ' + ';
    var isEqual = ' is : ';
    var addend1 = 5;
    var addend2 = 7;

//do the math to assign the sum var value
    sum = addend1 + addend2;
    
//get elements by id
    //get welcome
    var elWelcome = document.getElementById("welcome");
    elWelcome.textContent = welcome;

    //get calculation
    var elCalc = document.getElementById("calculation");
    elCalc.textContent = (calcLeader + addend1 + plusSign + addend2 + isEqual + sum);