// carousel option
$('.carousel').carousel({
    interval:2000
});
// collapse the navbar one scroll
$(window).scroll(function () {
    if ($('.navbar').offset().top>50){
        $('.navbar-fixed-top').addClass('navbar-custom-animate');
    }else {
        $('.navbar-fixed-top').removeClass('navbar-custom-animate');
    }
})

// easing animation menu
$(document).ready(function () {
    $('a.page-scroll').bind('click',function (event) {
        var $anchor = $(this);
        $('html,body').stop().animate({
           scrollTop:$($anchor.attr('href')).offset().top
        },1500,'easeInOutExpo');
        event.preventDefault();
    })
});
// circle progress bar
$( document ).ready(function() {
    $('#webdesign').circliful();
    $('#javascript').circliful();
    $('#php').circliful();
    $('#photoshop').circliful();
});
// scroll animation plugin
$(function(){
    function onScrollInit( items, trigger ) {
        items.each( function() {
            var osElement = $(this),
                osAnimationClass = osElement.attr('data-os-animation'),
                osAnimationDelay = osElement.attr('data-os-animation-delay');

            osElement.css({
                '-webkit-animation-delay':  osAnimationDelay,
                '-moz-animation-delay':     osAnimationDelay,
                'animation-delay':          osAnimationDelay
            });

            var osTrigger = ( trigger ) ? trigger : osElement;

            osTrigger.waypoint(function() {
                osElement.addClass('animated').addClass(osAnimationClass);
            },{
                triggerOnce: true,
                offset: '90%'
            });
        });
    }

    onScrollInit( $('.os-animation') );
    onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );
});