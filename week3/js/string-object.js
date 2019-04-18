//create var of string type
var saying = 'Home sweet home';

//create var mesg
var msg = '<h2>Length</h2>' + '<p>' + saying.length + '</p>';

msg += '<h2>Convert to upper case</h2>' + '<p>' + saying.toUpperCase() + '</p>';

msg += '<h2>Convert to lower case</h2>' + '<p>' + saying.toLowerCase() + '</p>';

msg += '<h2>Character with index 12</h2>' + '<p>' + saying.charAt(12) + '</p>';

msg += '<h2>First ee</h2>' + '<p>' + saying.indexOf('ee') + '</p>';

msg += '<h2>Last e</h2>' + '<p>' + saying.lastIndexOf('e') + '</p>';

msg += '<h2>Get substring index 8-14</h2>' + '<p>' + saying.substring(8, 14) + '</p>';

msg += '<h2>Relace</h2>' + '<p>' + saying.replace('me', 'w') + '</p>';

//display info
//var el = document.getElementById('info');
//write the message
//el.innerHTML = msg;
// can out put either as above or as below
document.getElementById('info').innerHTML = msg;