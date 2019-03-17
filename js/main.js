var REST_ENDPOINT_CONTACT = "https://jijojames.com/rest/index.php/v1/contact";
var REST_ENDPOINT_VIDEOS = "https://jijojames.com/rest/index.php/v1/videos";
var REST_ENDPOINT_BLOG = 'http://localhost/website/rest/index.php/v1/blog';

function onCaptchaCallback () {
    grecaptcha.render('reCaptcha-container', {
        'sitekey' : '6LdzBpgUAAAAAAKB2fzfWeixUIb6eXC2h9KkNqRz'
    });
}

jQuery(document).ready(function($) {
    'use strict';

    $(function() {
    var modBtn     = $('#modBtn'),
        modal      = $('#modal'),
        modContent = modal.find('.modal-content');

    modBtn.on('click', function() {
        modal.css('display', 'block');
        modContent.removeClass('modal-animated-out').addClass('modal-animated-in');
    });

    $(document).on('click', function(e) {
        var target = $(e.target);
        var close = modal.find('.close-btn img')
        if (target.is(modal) || target.is(close)) 
        {
            modContent.removeClass('modal-animated-in').addClass('modal-animated-out').delay(300).queue(function(next) {
                modal.css('display', 'none');
                next();
            });
        }
    });

    });

    $('a.scrollTo').on('click', function() {
        var scrollTo = $(this).attr('data-scrollTo');
        $( "a.scrollTo" ).each(function() {
            if (scrollTo == $(this).attr('data-scrollTo'))
            {
                $(this).addClass('active');
            }
            else
            {
                $(this).removeClass('active');
            }
        });

        $('body, html').animate({
            "scrollTop": $('#'+scrollTo).offset().top
        }, 1000);
        return false;
    });

    $(".menu-icon").click(function() {
        $(this).toggleClass("active");
        $(".overlay-menu").toggleClass("open");
    });
});
