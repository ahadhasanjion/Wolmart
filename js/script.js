$(function(){
    'use strict'

    //BANNER SLIDER PART

    $('#banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        // nextArrow:'<i class="fas fa-chevron-right nex_arr"></i>',
        // prevArrow:'<i class="fas fa-chevron-left pre_arr"></i>',
        arrows: false,
    });

    //BEST SELLER
    $('.b_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        nextArrow:'<i class="fas fa-chevron-right next_arr"></i>',
        prevArrow:'<i class="fas fa-chevron-left prev_arr"></i>',
    });

    $('#handleCounter').handleCounter();

    $('#clock').countdown('2022/11/5', function(event) {
        $(this).html(event.strftime('%D days %H:%M:%S'));
    });

    $('.counter').counterUp();

    $('.blog_post_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        nextArrow:'<i class="fas fa-chevron-right nt_arr"></i>',
        prevArrow:'<i class="fas fa-chevron-left pv_arr"></i>',
    });
     // FILTER PLUGIN
    var containerEl = document.querySelector('.filter_img');
    var mixer = mixitup(containerEl);

});