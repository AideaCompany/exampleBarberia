$(document).ready(function () {

    $('#ancla').click(function (e) {
        e.preventDefault();
        var strAncla = $(this).attr('href');
        $('body,html').stop(true, true).animate({
            scrollTop: $(strAncla).offset().top - 59
        }, 1000)
    });

    hamburger();

})


function hamburger() {
    $('#navHam').click(function () {
        $('.containerNavHam2').show();
        $('.navTabletCel').toggle("slide", {
            "direction": "left"
        }, 200);

    });
    $('.x').click(function () {
        $('.navTabletCel').hide();

        $('.containerNavHam2').hide();
    })
    $('.containerNavHam2').click(function () {
        $('.navTabletCel').hide();

    })

}
