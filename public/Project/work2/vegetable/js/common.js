$(function(){
    console.log('연결');
    var new_swiper = new Swiper('.swiper-container', {
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

$(function(){
    $(window).scroll(function(){
        
        var srcTop = $(window).scrollTop(),
            srcHeight =$(window).height(),
            src_he =srcHeight*0.08,
            plus = srcTop+src_he,
            vis = $('.visual_area').offset().top,
            one = $('.one').offset().top,
            two = $('.two').offset().top,
            thr = $('.thr').offset().top,
            four = $('.four').offset().top,
            five = $('.five').offset().top,
            footer = $('#footer').offset().top;
        
        
        if(plus >=vis  && plus<=one){
            $('.visual_area').animate({'top':'0', 'opacity':'1'},600,'swing');

        }else if(plus>=one && plus<=two){
            $('.one .title').delay(600).animate({'top':'0','opacity':'1'},600,'swing');
            $('.one .txt-area').delay(800).animate({'top':'0','opacity':'1'},600,'swing');
            $('.one .cont-wrap').delay(1000).animate({'top':'0','opacity':'1'},600,'swing');
        
        }else if(plus>=two && plus<=thr){
            $('.two .title').delay(600).animate({'top':'0','opacity':'1'},600,'swing');
            $('.two .cont-wrap').delay(800).animate({'top':'0','opacity':'1'},600,'swing');
            
        }else if(plus>=thr && plus<=four){
            $('.thr .detail').delay(600).animate({'top':'0','opacity':'1'},600,'swing');
            $('.thr .product').delay(800).animate({'top':'0','opacity':'1'},600,'swing');
            
        }else if(plus>=four && plus<=five){
            $('.four h2').delay(600).animate({'top':'0','opacity':'1'},600,'swing');
            $('.four ul').delay(800).animate({'top':'0','opacity':'1'},600,'swing');
            
        }else if(plus>=five && plus<=footer){
            $('.five .cf').delay(600).animate({'top':'0','opacity':'1'},600,'swing');
        }
        
        
    });
});



