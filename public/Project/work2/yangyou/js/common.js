$(function(){
    var $header = $('.header'),
        $nav = $header.find('.nav'),
        $meu = $nav.children('ul').children('li'),
        $btnOpen = $('.header .open'),
        $btnClose =$('.header .close');
    
    $meu.mouseenter(function(){
        $(this).children('ul').addClass('active').show('500',function(){
            if($(this).parent().hasClass('parent')){
                $(this).parent().stop().addClass('on');
            }
        }); 
          
    });
    $meu.mouseleave(function(){
        $(this).children('ul').addClass('active').hide('500',function(){
            if($(this).parent().hasClass('parent')){
                $(this).parent().stop().removeClass('on');
            }
        }); 
      
    });    
    
    $btnOpen.click(function(){
        $('.drawer').addClass('on');    
    });
    
    $btnClose.click(function(){
        $('.drawer').removeClass('on');
    });
    
    
    
    
    $('.slidWrap .bxslider').bxSlider({
      auto: true,
      autoControls: true,
      stopAutoOnClick: true,
      pager: true,
    });
    
    
    
    
});