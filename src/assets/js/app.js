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

var scrollMenu = function (element) {
    $('a',element).on('click', function (e) {
        e.preventDefault();
        var tgt = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(tgt).position().top - 114 + 'px'
        }, 500);
    });
};

(function($) {
    menuActiveScroll('#home-header');
    buttonNextSection('.tg-testimonials','#testimonials');
    scrollMenu('#main-menu:not(.page-menu)');

    $('#chat-btn').on('click',function (e) {
        e.preventDefault();
    });
})(jQuery);

