$(function(){
    console.log('연결');
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween : 30,
        loop : true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
        },
    });
    
     var my_swiper = new Swiper('.pro1 .swiper-container', {
        slidesPerView: 4,
        loop : true,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
});
