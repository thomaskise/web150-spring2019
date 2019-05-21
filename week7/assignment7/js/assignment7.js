/****************************************************************************************
 *****                                MPG Calculator                                *****
 *****               Get user input: miles & gallons; output the MPG                *****
 ****************************************************************************************/

window.onload = function(e){

    // declare function to validate input
    function validateInput(e) {                        
        var el, elMsg;                                                                  // declare messaging variables
        if (!e) {                                                                       // if event object doesn't exist
          e = window.event;                                                             // use IE fallback
        }
        el = e.target || e.srcElement;                                                  // get target of event
        elMsg = el.nextSibling;                                                         // get its next sibling
        
        if (isNaN(el.value) || el.value < 1) {                                          // if value is not numeric set msg
            elMsg.innerHTML = 'Entry must be numeric = 1 or higher';
        } else {                                                                        // otherwise
            elMsg.innerHTML = '';                                                       // clear message
        }
    }

    //declare function to caclulate the MPG
    function calculateMpg(e) {
        var elMiles     = parseFloat(document.getElementById('miles').value);           // miles driven input
        var elGallons   = parseFloat(document.getElementById('gallons').value);         // gallons used input
        var elMpg       = (elMiles / elGallons).toFixed(2);                             // MPG calculation
        
        if (isNaN(elMiles) || (isNaN(elGallons) || elMiles < 1 || elGallons < 1)) {     // if inputs are invalid
            document.getElementById('mpg').value = 'Check your entries.';               // issue advice
        }else{                                                                          // otherwise
            document.getElementById('mpg').value = elMpg;                               // provide the answer!
            }
    }
    /************************************************************************************************************
     * *****                                SET-UP EVENT LISTENERS
     * *****
     ************************************************************************************************************/

    //define variables
    var elInput1    = document.getElementById('miles');                 // miles input for event assignment
    var elInput2    = document.getElementById('gallons');               // gallons input for event assignment
    var elButton    = document.getElementById('button');                // button action for event assignment

    if (elInput1.addEventListener)  {                                   // if eventListener is supported
        elInput1.addEventListener('blur', function(e) {                 // set listener to field blur event
            validateInput(e); }, false);                                // call calculateMpg()
        elInput2.addEventListener('blur', function(e) {                 // set listener to field blur event
            validateInput(e); }, false);                                // call calculateMpg()
        elButton.addEventListener('click', function(e) {                // set listener to button click event
            calculateMpg(e); }, false);                                 // call calculateMpg()
    }else{                                                              // otherwise
        elInput1.addEventListener('onblur', function(e) {               // support IE with onblur
            validateInput(e); }, false);                                // call calculateMpg()
        elInput2.addEventListener('onblur', function(e) {               // set listener to field onblur event
            validateInput(e); }, false);                                // call calculateMpg()
        elButton.addEventListener('onclick', function() {               // set listener to button onclick event
            calculateMpg(e); }, false);                                 // call calculateMpg()
    }

    // clear entries on refresh for clean start
    document.getElementById('miles').value      = '';
    document.getElementById('gallons').value    = '';
    document.getElementById('mpg').value        = '';
    elMsg                                       = '';
}
