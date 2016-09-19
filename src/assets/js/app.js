$(document).foundation();

var menuActiveScroll = function(element, sections) {

    $(window).on('scroll', function(e) {
        var posY = e.currentTarget.scrollY;

        if(typeof sections !== 'undefined') {

            for(var i = 0; i < sections.length; i++) {
                if($(sections[i]).position().top == $(this).scrollTop())
                    console.log(sections[i]);
            }

        } else {
            return false;
        }

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

        var tgt = $(this).attr('href'), _parent = $(this).parents('li');
        _parent.addClass('active')
            .siblings('li')
            .removeClass('active');

        $('html,body').animate({
            scrollTop: $(tgt).position().top - 114 + 'px'
        }, 500);
    });
};

(function($) {

    QueryLoader2(document.querySelector("body"), {
        barColor: "#3b7eb4",
        backgroundColor: "#545353",
        //percentage: true,
        barHeight: 3,
        minimumTime: 200,
        fadeOutTime: 1000
    });

    var homeSections = ['#testimonials','#construtoras','#servicos','#proposta','#contato'];
    menuActiveScroll('#home-header',homeSections);

    buttonNextSection('.tg-testimonials','#sobre');
    buttonNextSection('.go-sobre','#sobre');

    scrollMenu('#main-menu:not(.page-menu)');

    $('#chat-btn').on('click',function (e) {
        e.preventDefault();
    });

    $('.tele').mask('(00) 00000.0000');

    $.ajaxSetup({
        type: 'POST',
        dataType: 'html',
        beforeSend: function () {
            console.log('indo');
        },
        complete: function () {
            console.log('foi');
        },
        error: function (e) {
            alert(e.statusText);
        }
    });

    $(document).on('submit', '#form-proposta', function (e) {
        e.preventDefault();
        var _data = $(this).serialize();

        $.ajax({
            url: 'proposta.php',
            data: {
                formData: _data
            },
            success: function (data) {
                if(data == "true") {
                    alert('Proposta enviada com sucesso! Aguarde nossa resposta.');
                    location.reload();
                } else {
                    alert('Ocurreu algum erro no envio. Verifique se os dados estão todos preenchidos e tente novamente.');
                }
            }
        });
    });

    $(document).on('submit', '#form-contato', function (e) {
        e.preventDefault();
        var _data = $(this).serialize();

        $.ajax({
            url: 'contato.php',
            data: {
                formData: _data
            },
            success: function (data) {
                if(data == "true") {
                    alert('Mensagem enviada com sucesso! Aguarde nossa resposta.');
                    location.reload();
                } else {
                    alert('Ocurreu algum erro no envio. Verifique se os dados estão todos preenchidos e tente novamente.');
                }
            }
        });
    });

    //Chat
    $('#chat-req').on('submit',function (e) {
        e.preventDefault();
        var text = $('input',this).eq(0).val();
        $('textarea','#send-anwser').val(text);
        $('#chat-container').foundation('open');
    });

    $('#send-anwser').on('submit',function (e) {
        e.preventDefault();
        var _data = $(this).serialize();

        $.ajax({
            url: 'chat.php',
            data: {
                formData: _data
            },
            success: function (data) {
                if(data == "true") {
                    alert('Mensagem enviada com sucesso! Aguarde nossa resposta.');
                    location.reload();
                } else {
                    alert('Ocurreu algum erro no envio. Verifique se os dados estão todos preenchidos e tente novamente.');
                }
            }
        });

    });

    //menu mobile
    $('.sand').click(function (e) {
        e.preventDefault();
    });

    $('.toggle-mo-menu').on('click',function (e) {
        $('#offcanvas').toggleClass('active');
    });


})(jQuery);



