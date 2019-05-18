const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

//get the date
var date = new Date();
console.log(date);

//set current hour/minutes/second
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + "Minutes: " + min + "Seconds: " + sec);

//calculate coordinates to set style transform element attributes
let hrPosition  = (hr*360/12)+(min*360/60/12);//hour hand moves 12x per hour + 12x per minute
let minPosition = (min*360/60)+(sec*360/60/60);//minute hand moves 60x per min + 60x per sec
let secPosition = sec*360/60;//second hand moves 60x per second

//set time within a function 
function runTheClock () {
    
    //keep hands from flipping backwards @ 360 degrees
    hourPosition = hrPosition+3/360; //set degress push display an additional hour past 360 degrees
    minPosition = minPosition+6/60; //set degress push display an additional minute past 360 degrees
    secPosition = secPosition+6; //add degrees to push display an additional second past 360 degrees

    //set the style style transform element attributes
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

//set the interval to run the function that updates the clock
var interval = setInterval(runTheClock, 1000);