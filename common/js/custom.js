/*
$(document).ready(function () {
    $('img').addClass('img-responsive img-thumbnail');
});
*/

$(document).ready(function () {
    $('#nextpage').click(function () {
        $('#first-page').removeClass('active');
        $('#nextpage').addClass('active');
    });
});
$(window).on('load', function () {
    $('#pr').fadeOut(1000);
})

// show modal
$('#mymodal').modal('show');

// modal image gallery
$(document).ready(function () {
    $('#my-gallery img').on('click', function () {
        $('#modal').modal({
            show: true
        });
        var mysrc = this.src;
        $('#modal-img').attr('src', mysrc);
        $('#modal-img').on('click', function () {
            $('#modal').modal('hide');
        });
    })
})

// carousel option
$('.carousel').carousel({
    interval:2000
});
$(document).ready(function () {
    $('#btn-start').click(function () {
        $('.carousel').carousel('cycle');
    });
    $('#btn-pause').click(function () {
        $('.carousel').carousel('pause');
    });
})