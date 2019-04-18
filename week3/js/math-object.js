var randomNumber = Math.floor((Math.random() * 10 + 1));



//display info
var el = document.getElementById('info');
//write the message
el.textContent = randomNumber;
// can out put either as above or as below
//document.getElementById('info').innerHTML = msg;