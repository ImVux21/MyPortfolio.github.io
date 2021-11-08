$(window).on('load', function(event) {
    $('body').removeClass('preloading');
    $('.loader').delay(1500).fadeOut('fast');
});