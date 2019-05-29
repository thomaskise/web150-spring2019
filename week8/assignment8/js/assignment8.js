/****************************************************************************************
 *****                                JS FAQs                                       *****
 *****          With popout h2 & expanding/contracting FAQ Answers                  *****
 ****************************************************************************************/

$(document).ready(function() {
  // animation #1 moves the element far to the right  
  $( "#animate" ).animate({
      color: "yellow",                              // set transition color
      marginLeft: "+=600px",                        // moves the margin far to the right 
      width: "120%",                                // lets text expand out beyond its borders
      opacity: 0.4,                                 // fade out on expansion
      fontSize: "5em"                               // expand font 
    }, 1200,                                        // expand out fairly quickly
    function() {                                    // set text color
      $("h2").css("display", "block")
    } 
    );
    
    // animation #2 brings the element back to the left to its resting position
    $( "#animate" ).animate({
      color: "#003366",                             // set resting text color
      marginLeft: "-=300px",                        // bring the text back into the faq box
      width: "100%",                                // bring text back into the faq box
      opacity: 1.0,                                 // fades back to full opacity
      fontSize: "3em"                               // take the font size down to resting state
    }, 2400,                                        // slow down the move back to a gentle rest
    function() {
      $("#by").writeText(" ~ by: Thom Harrington"); // spell out the author's name
    });    
  });
  
  // function to expand & contract the FAQ Answers
  $(function() {
    $('i').click(function() {                       // execute this function on click of the +/- icons
    $(this).toggleClass("fa fa-minus").             // on first click, toggle to minus sign
            toggleClass("fa fa-plus");              // click again and come back to the plus sign
    $(this).parent().next().slideToggle();          // when clicked, slide the answer text up and down     
  })

  /*
  ** function writeText() takes a text string argument and outputs a character at a time.
  ** I found this and thought it was fun, so I included it. I don't take credit for it.
  ** 
  ** Although I made some changes to clean up the code, I don't understand
  ** a couple of things about it:
  **     1. what is the syntax $.fn doing?
  **     2. the orginal function was declared differently and ended with
  **        (jquery). What's with that syntax?  
  */

  $(function writeText($){
    $.fn.writeText = function(content) {
      var contentArray = content.split(""),  
      current = 0,
      elem = this;
      setInterval(function() {
        if(current < contentArray.length) {
          elem.text(elem.text() + contentArray[current++]);
        }
      }, 500);
    }
  });

});// end document.ready
