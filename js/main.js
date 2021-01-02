$(document).ready(function () {
    // *** Sticky navigation bar ***
     //stickyNavbar() executed when user scrolls
    window.onscroll = function(){
        stickyNavbar()
    };

    // Get navigation bar
    var navbar = document.getElementById("navbar");

    //Get offset position of navigation bar
    var navbar_sticky = navbar.offsetTop;

    //Sticky class added upon reaching scroll position and removed
    // when scroll position is left
    function stickyNavbar(){
        if(window.pageYOffset >= navbar_sticky){
            navbar.classList.add("navbar_sticky");
        }else{
            navbar.classList.remove("navbar_sticky");
        }
    }
    
    //*** Filter projects in portfolio ***
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

    //*** Carousel ***
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
