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

    //get calcLeader
    var elLeader = document.getElementById("calcLeader");
    elLeader.textContent = calcLeader;
    
    //get addend1
    var elNum1 = document.getElementById("addend1");
    elNum1.textContent = addend1;

    //get plusSign
    var elPlus = document.getElementById("plusSign");
    elPlus.textContent = plusSign;

    //get addend2
    var elNum2 = document.getElementById("addend2");
    elNum2.textContent = addend2;

    //get isEqual
    var elEqual = document.getElementById("isEqual");
    elEqual.textContent = isEqual;

    //get sum
    var elSum = document.getElementById("sum");
    elSum.textContent = sum;
