$(function(){
   
    
    
   $('.gnbArea .gnb').mouseenter(function(){
     $('.gnbArea .gnb .twoDep').stop().slideDown();  
     $('#header .gnbBg').stop().slideDown();  
    });
    $('#header .gnbBg').mouseleave(function(){
     $('.gnbArea .gnb .twoDep').stop().slideUp();
    $('#header .gnbBg').stop().slideUp(); 
    });
    
    
    
    
   var my_swiper = new Swiper('.mainVis .swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },loop: true,
       autoplay: {
        delay:2500,
        disableOnInteraction:true,
      },
    });
    
    var swiper = new Swiper('.eventArea .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
        delay: 1500,
        disableOnInteraction:true,
      },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        }
    });
     $(window).scroll(function(){
            if($(this).scrollTop()>150){
                if(!$('#header').hasClass('active')){
                    $('#header').addClass('active');
                }
            }else{
                if($('#header').hasClass('active')){
                    $('#header').removeClass('active');
                }
            }
        });

        $(window).scroll(function(){
            var wScrollT = $(window).scrollTop(),
                wHeight = $(window).height(),
                wHeight2 = wHeight * 0.9,
                mainScrollT = wScrollT + wHeight2,
                mCon1 = $('.mainCon1').offset().top,
                mCon2 = $('.mainCon2').offset().top,
                mCon3 = $('.mainCon3').offset().top,
                mCon4 = $('.mainCon4').offset().top,
                footr = $('#footer').offset().top;
        
        if( mainScrollT >= mCon1 && mainScrollT <= mCon2 ){
            $('.mainCon1 .con1 h2').animate({"bottom":"0","opacity":"1"},800, 'swing');
            $('.mainCon1 .benArea .benbx').delay(600).animate({"bottom":"0","opacity":"1"},800, 'swing');
        }else if( mainScrollT >= mCon2 && mainScrollT <= mCon3 ){
            $('.mainCon2 .eventArea').delay(600).animate({"bottom":"0","opacity":"1"},800, 'swing');
            $('.mainCon2 .swiper-wrapper').delay(800).animate({"bottom":"0","opacity":"1"},800, 'swing');
        }else if( mainScrollT >= mCon3 && mainScrollT <= mCon4 ){
            $('.mainCon3 h2').delay(600).animate({"bottom":"0","opacity":"1"},800, 'swing');
            $('.mainCon3 .attrArea .attrBx').delay(1000).animate({"bottom":"0","opacity":"1"},800, 'swing');
        }else if( mainScrollT >= mCon4 && mainScrollT <= footr ){
            $('.mainCon4 h2').delay(600).animate({"bottom":"0","opacity":"1"},800, 'swing');
            $('.mainCon4 .infoArea').delay(1000).animate({"bottom":"0","opacity":"1"},800, 'swing');
            
        }
    });   
    

});