//first js example
    var today = new Date(); //created an object of type Date
    var hourNow = today.getHours();
    var greeting = '';
    console.log("Current hour is: " + hourNow);
    if (hourNow > 18) {
        greeting = 'Good evening!';
    } else if(hourNow > 12) {
        greeting = 'Good afternoon!';
    } else if (hourNow > 0){
        greeting = 'Good morning!';
    } else {
        greeting = "Welcome!";
    }
    document.write('<h2>' + greeting + '</h2>');