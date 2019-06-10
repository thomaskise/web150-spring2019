//get the current filename
var url = window.location.pathname; //this returns the entire URL to the current file
var fileName = url.substring(url.lastIndexOf('/')+1); //this returns just the filename at the end of the full URL

// create switch statement to id page and set page level overrides
// currently only HP, the case statement allows easy overrides for other pages in the future
switch (fileName) {
    case '':                                                // empty string accommodates case where index.php is not entered
        var newEl       = document.createElement('link') 
        newEl.setAttribute('rel', 'stylesheet');
        newEl.setAttribute('type', 'text/css');
        newEl.setAttribute('href', 'css/hp-override.css');
        document.head.appendChild(newEl);
    break;

    case 'index.php':
        var newEl       = document.createElement('link') 
        newEl.setAttribute('rel', 'stylesheet');
        newEl.setAttribute('type', 'text/css');
        newEl.setAttribute('href', 'css/hp-override.css');
        document.head.appendChild(newEl);
    break;
}
