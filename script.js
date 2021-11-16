$(window).on('load', function(event) {
    $('body').removeClass('preloading');
    $('.loader').delay(1500).fadeOut('fast');
});

var btnContainer = document.getElementsByClassName("menu");
var btns = btnContainer.getElementsByClassName("menu-link");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active");
        this.className += " active";
    })
}