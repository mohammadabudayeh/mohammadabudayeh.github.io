(function ($) {
    "use strict";
    jQuery(document).ready(function () {
        /***SKILLS***/
        $('div.skillbar').each(function () {
            $(this).find('div.skillbar-bar').css({
                width: $(this).attr('data-percent')
            });
        });
        /***SCROLL TO TOP***/
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
                $('div#scrollup').addClass('animated flipInY').fadeIn(200);    // Fade in the arrow
            } else {
                $('div#scrollup').fadeOut(200);
            }
        });
        $('div#scrollup').on('click', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
    });
    jQuery(window).load(function () {
        /***FADES OUT PRE-LOADER***/
        $('div#loading').fadeOut(500);
        /***SCROLL ANIMATION***/
        window.sr = ScrollReveal({reset: false}); // reset false stops repetition of animation
        var commonCards = '#port-add-icon,#map-card,.interest-icon-even,.interest-icon,' +
            '.timeline-dot, .timeline-content,#add-more,#skills-card,#testimonials-card,' +
            '#portfolios-card,#interest-card,#p-one,#p-two,#p-three,#blog,#contact-card,#clients';
        // Customizing a reveal set
        sr.reveal(commonCards, {duration: 1100});
        sr.reveal('#Navbar-new,#about-card,.map-label', {duration: 1400, delay: 500});
        sr.reveal('#v-card-holder', {duration: 1400, distance: '150px'});
        sr.reveal('.skillbar-bar', {duration: 1800, delay: 300, distance: '0'});});
})(jQuery);

$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });
    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});
