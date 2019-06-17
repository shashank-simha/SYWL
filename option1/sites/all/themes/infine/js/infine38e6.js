jQuery(document).ready(function ($) {

    adjustMenuPosition();

    $('.menu a[name^="#"], a[name^="#"].roll').each(function (index, element) {
        var hash = $(this).attr('name');
        $(this)[0].setAttribute('href', hash);

        if ($(hash).length < 1) {
            $(this).parent().remove();
        }
    });

    $('.menu a[href^="#"], a[href^="#"].roll').on('click', function (e) {

        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing', function () {
            window.location.hash = target;
        });
    });

    $('.nav').localScroll();
    $('.nav').scrollspy();
    // This needs to be done as href anchors are changed after document ready
    $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh')
    });
});


function adjustMenuPosition() {
    var context = jQuery('body.toolbar-drawer');
    var height = jQuery('#toolbar').height() + 'px';

    // after document ready
    jQuery('.navbar-fixed-top', context).css('top', height);
    jQuery(context).css('padding-top', height);

    // on page resize
    jQuery(window).resize(function () {

        var height = jQuery('#toolbar').height() + 'px';
        jQuery('.navbar-fixed-top', context).css('top', height);
        jQuery(context).css('padding-top', height);
    });
}
