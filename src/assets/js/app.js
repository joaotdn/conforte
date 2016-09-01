$(document).foundation();

var menuActiveScroll = function(element) {
    $(window).on('scroll', function(e) {
        var posY = e.currentTarget.scrollY;
        if(posY >= 100)
            $(element).addClass('active');
        else
            $(element).removeClass('active');
    });
};

var buttonNextSection = function(element, target) {
    $(element).on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({scrollTop: $(target).position().top + 'px'},1000);
    });
};

(function($) {
    menuActiveScroll('#home-header');
    buttonNextSection('.tg-testimonials','#testimonials');
})(jQuery);

