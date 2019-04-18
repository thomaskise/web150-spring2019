var originalNumber = 10.23456;
var msg = '';
msg += '<h2>Original number: </h2><p>' + originalNumber + '</p>'; 
//round to 3 decimal palces
msg += '<h2>Decimal places: </h2><p>' + originalNumber.toFixed(3) + '</p>'; 
msg += '<h2>3 Digits places: </h2><p>' + originalNumber.toPrecision(3) + '</p>'; 


//display info
var el = document.getElementById('info');
//write the message
el.innerHTML = msg;
// can out put either as above or as below
//document.getElementById('info').innerHTML = msg;