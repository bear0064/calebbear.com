window.addEventListener("DOMContentLoaded", function() {
$("#navbar").hide().fadeIn(3000);

$(function(){
  $.scrollIt();
});    
    

var scroll_start = 0;
                var startchange = $('#startchange');
                var offset = startchange.offset();
                    if (startchange.length){
                $(document).scroll(function() { 
                    scroll_start = $(this).scrollTop();
                    if(scroll_start > offset.top) {
                          $(".navbar-default").css('background-color', '#000');
                       } else {
                          $('.navbar-default').css('background-color', 'transparent');
                       }
                   });
                    }

    



});


