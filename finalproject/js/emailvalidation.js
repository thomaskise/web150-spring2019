// set the submit handler
$.validator.setDefaults({
  submitHandler: function() {
    $("#emailheading").text("Your email has been sent!");
  }
});
  
$(document).ready(function() {
  $("#emailform").validate({                                                          // validation rules for each field
    rules: {
      name: {                                                                         // name rules
        required: true,                                                               // name is required
        minlength: 2,                                                                 // number of min charachters for name
      },
      email: {                                                                        // email rules
        required: true,                                                               // is required
        email: true                                                                   // future: add regex
      },
      comments: {                                                                     // comment box rules
        required: "#other:checked"                                                    // comments is optional unless the "other" checkbox is selected
      }
    },                                                                                // end rules
                                                                                      // custom messages are set to correspond with rule definition
    messages: {
      name: {
        required: " Please enter your name.",
        minlength: jQuery.validator.format(" Name must be at least {0} characters")
      },
      email: {
        required: " Please enter your email address.",
        email: " Email address must be in the format of name@domain.extension."
      },
      comments: {
        required: " Commnets are required when 'other' is checked."
      }
    },                                                                                  // end messages 
                                                                                        // set the error message under the errored input field 
    errorPlacement: function(error, element) {
      element.after(error).after("<br/>");                                              // insert a break so that message always goes after the field rather than next to it
    }                                                                                   // end errorPlacement
  });
});                                                                                     //end $(document).ready(function()


