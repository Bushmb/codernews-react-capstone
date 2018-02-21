// (function($) {
$(document).ready(function() {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 48)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });

    // Closes responsive menu when a link is clicked
    $('.navbar-collapse>ul>li>a').click(function() {
        $('.navbar-collapse').collapse('hide');
    });


    function checkOffset() {
        if($('#mainNav').length != 0) {
            if ($('#mainNav').offset().top > 100) {
                $('#mainNav').addClass('navbar-shrink');
            }     
            else {
                $('#mainNav').removeClass('navbar-shrink');
            }
        }
    }

    // Run on page load
    checkOffset();

    // Run when scrolling
    $(window).scroll(function() {   
        checkOffset();
    })

})
// (jQuery); // End of use strict
