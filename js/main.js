$(document).ready(function () {
    //Filter projects in portfolio
    var $buttons = $('.portfolio .button-group button');


    $buttons.click(function (e) {

        $('.portfolio .button-group button').removeClass('active');
        e.target.classList.add('active');

        var selector = $(e.target).attr('data-filter');
        $('.portfolio .grid').isotope({
            filter: selector
        });

        return false;
    })

    //Carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            }
        }
        
    })
});