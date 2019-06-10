$(document).ready(function() {
    $( document ).tooltip();                            //setup tool tips

    $('#showChecker').on('click', function() {          // show/hide validity checkers
      $('#validityChecker').toggleClass('cS-hidden')    // stole cS-hidden from lightslider :)
      $(this).text($(this).text() == 'Show HTML/CSS Checkers' ? 'Hide HTML/CSS Checkers' : 'Show HTML/CSS Checkers');
    });
});