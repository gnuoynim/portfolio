$(function(){ 
    $('.main-slider-wrapper').bxSlider({ 
        speed : 800 , 
        auto : true ,
        autoControls : true,
        pause : 6000
    });
    
    $('.brand-slider-wrapper').bxSlider({
        pager : false,
       speed : 400 , 
        auto : true ,
    });
    
  
    $('.menu-slider-wrapper').bxSlider({
        mode: 'horizontal',
        slideWidth: 340 ,
        slideMargin : 44 ,
        minSlides: 3 ,
        maxSlides: 3 ,
        moveSlides: 1 ,
        nextText : '다음',
        prevText : '이전',
        nextSelector : '#menu-next' ,
        prevSelector : '#menu-prev',
        pager : false
    });
    
   
    $('.story-box').bxSlider({
        controls : false ,
        slideWidth : 670,
        pagerCustom : '#story-pager'
    });

}); 





