
var ImgSize = $(".topo").height();
var $MENU = $(".MENU");
$(document).on('scroll', function () {
    if ($(window).scrollTop() >= ImgSize) {
        $MENU.addClass("fixar");
        return ImgSize;
    } else {
        $MENU.removeClass("fixar");
        return ImgSize;
    }
});