$(document).ready(function() {        // be sure the page is loaded before starting

  $( function() {
    $( "#accordion" ).accordion({     // call the accordion widget for the element with "accordion" id
      collapsible: true,              // allows all sections to be closed
      disable: true,                  // sets the accordiaon flat on lauch
      active: false,                  // Set to false, all panels are collapsed on page view; collapsible must be trun
      heightStyle: "content"          // set the height of the open content to fit the content
      
    });                               // end the accordion widget
  });                                 // end the function call
});                                   // end document.ready 