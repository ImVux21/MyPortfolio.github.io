$(window).on('load', function(event) {
   $('body').removeClass('preloading');
   $('.loader').delay(1300).fadeOut('fast');
});