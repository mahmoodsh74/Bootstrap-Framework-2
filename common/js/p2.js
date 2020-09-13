$(document).ready(function () {
    $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).parent().siblings().removeClass('open');
        $(this).parent().toggleClass('open');
    });
});
//slider
$("#slider").responsiveSlides({
    auto: true,
    pager: false,
    nav: true,
    speed: 500,
    pause: true,
    namespace: "callbacks",
    /*  before: function () {
        $('.events').append("<li>before event fired.</li>");
      },
      after: function () {
        $('.events').append("<li>after event fired.</li>");
      }
    });*/
});

// collapse nav
$('.collapse').on('show.bs.collapse', function () {
    $(this).parent().find('.fa-plus').removeClass('fa-plus').addClass('fa-minus');
}).on('hidden.bs.collapse', function () {
    $(this).parent().find('.fa-minus').removeClass('fa-minus').addClass('fa-plus');
})

// news scroll box
$(function () {
    $(".comments-scroll").bootstrapNews({
        newsPerPage: 6,
        autoplay: true,
        pauseOnHover: true,
        direction: 'up',
        newsTickerInterval: 4000,
        onToDo: function () {
            //console.log(this);
        }
    });
});
// scroll to top btn
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });
    $('.scroll-to-top').click(function () {
        $('html,body').animate({scrollTop: 0}, 800);
        return false
    });
});