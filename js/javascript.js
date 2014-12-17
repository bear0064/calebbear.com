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
        $(".btn-navbar").click(); //bootstrap 2.x
        $(".navbar-toggle").click() //bootstrap 3.x by Richard
    });



});