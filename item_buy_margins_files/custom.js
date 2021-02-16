/* Add here all your JS customizations */

function getBodyScrollTop() {
    return (
            self.pageYOffset ||
            (document.documentElement && document.documentElement.ScrollTop) ||
            (document.body && document.body.scrollTop)
            );
}

function existVerticalScroll() {
    return document.body.offsetHeight > window.innerHeight;
}
$(document).ready(function () {
    $('a.fancybox').click(function () {
        $('body').data('scrollY', `${getBodyScrollTop()}`);
    });
});

$('a.fancybox').fancybox({
    beforeShow: function () {
        $('body').addClass('body-lock');
        $('body').css('top', `-${$('body').data('scrollY')}px`);
    },
    beforeClose: function () {
        $('body').removeClass('body-lock');
        window.scrollTo(0, +$('body').data('scrollY'));
    },
    mouseWheel: false
});
