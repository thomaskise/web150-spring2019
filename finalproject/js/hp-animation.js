/****************************************************************************************
 *****                                JS hp-animation                               *****
 *****          Animates the image in CIC HP and spells out "Yay" banner            *****
 ****************************************************************************************/

$(document).ready(function() {
  
  // animation #1 moves the element from off stage to center 
  $( "#hp-image" ).animate({
      right:      "+=600px",                           // moves the image to center 
      width:      "80%",                               // enlarges image
      opacity:    0.3                                  // partially fades in
    },            2400);
  
  // animation #2 moves the element far to the right  
  $( "#hp-image" ).animate({
      right:      "-=1200px",                          // moves image back out to the right to the right       
      top:        "-20px",
      width:      "100%",                              // image gets even larger
      opacity:    0.5,                                 // image continues to fade in
      },          2400                                 // set animation timing
      );
          
  // animation #3 brings the element back to the left to its resting position
  $( "#hp-image" ).animate({        
    right:    "0",                                      // sets image in place to fit display
    width:    "90%",                                    // reduces image size to fit in display
    opacity:  1.0                                       // fades into full opacity        
  },          3000,                                     // slow down the move to a gental final resting
    function() {
      $("#yay").writeText("YAY! Clay's Cool !!");      // spell out the h2 heading
      
      //set padding for larger devices
      var x = window.matchMedia("(min-width: 768px)")   // set @media device min-width
              
      if (x.matches) {                                  // If media query matches
        $("#hp-image").css("padding","0 0 0 12em")      // set the left padding
      } else {                                          // otherwise
        $("#hp-image").css("padding","0 0 0 0")         // set the padding to zero
      }       
    }   //ends anonymous function 
    
  );    //ends animtation #3
  
  /*******************************************************************************************
  *** function writeText() takes a text string argument and outputs a character at a time. ***
  *** I found this and thought it was fun, so I included it. I don't take credit for it.   ***
  ***                                                                                      ***
  *** Although I made some changes to clean up the code, I don't understand                ***
  *** a couple of things about it:                                                         ***
  ***     1. what is the syntax $.fn doing?                                                ***
  ***     2. the orginal function was declared differently and ended with                  ***
  ***        (jquery). What's with that syntax?                                            ***
  ********************************************************************************************/

  $(function writeText($){
    $.fn.writeText = function(content) {
      var contentArray = content.split(""),  
      current = 0,
      elem = this;
      setInterval(function() {
        if(current < contentArray.length) {
          elem.text(elem.text() + contentArray[current++]);
        }
      }, 100);
    }
  });  // end writeText()

});// end document.ready
