window.addEventListener("DOMContentLoaded", function () {
    $("#navbar").hide().fadeIn(2000);

    $(function () {
        $.scrollIt();
    });



    $(window).scroll(function () {
        if ($(this).scrollTop() > 25) {
            $('.navbar-default').addClass('opaque');
        } else {
            $('.navbar-default').removeClass('opaque');
        }
    });

    $('.nav a').on('click', function () {
        $(".navbar-toggle").click() 
    });



});