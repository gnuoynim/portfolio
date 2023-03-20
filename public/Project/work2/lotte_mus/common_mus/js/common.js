$(function(){
    var $header = $('#header'),
        $gnbArea = $header.find('.gnbArea'),
        $gnb = $gnbArea.children('.gnb'),
        $oneD = $gnb.children('li'),
        $twoD = $oneD.children('.twoD'),
        $gnbBg = $(".gnbBg"),
        $leftAr =$('.gnbArea .leftArea'),
        $famSite=$('#footer .bottom .familySite');
    
        console.log($famSite);
    
        $famSite.click(function(){
            $famSite.children('ul').toggle();
        });
    
        

        $('.gnb > li, #header .gnbBg , .gnbArea .leftArea').on('mouseenter',function(){
            $twoD.stop().slideDown(); 
            $leftAr.stop().slideDown(); 
            $gnbBg.stop().slideDown(); 
        });
        $('.gnb > li, #header .gnbBg , .gnbArea .leftArea').on('mouseleave',function(){
            $twoD.stop().slideUp();   
            $leftAr.stop().slideUp(); 
            $gnbBg.stop().slideUp();
        });
        
        var tr = true;
    
        $('.mBtn').on('click',function(){
            
            if(tr==true){
                $('.mMenuArea').animate({'left':'0'},300,'swing');
                tr=false;
            }
        });    
        $('.closeBt').on('click',function(){
            
            if(tr==false){
                $('.mMenuArea').animate({'left':'-100%'},300,'swing');
                tr=true;
            }    
            
            
            
        });
        var onedep = $('.mMenuArea .gnbArea > ul > li > a'),
            twodep = $('.mMenuArea .gnbArea > ul > li > .twoD'),
            thrdep = $('.mMenuArea .gnbArea > ul > li > .twoD > ul > li > .thrBt'),
            thrdep2 = $('.mMenuArea .gnbArea > ul > li > .twoD > ul > li > .thrBt .thrD');
        
        onedep.on('click',function(){
            $(this).parent().addClass('on');
            $(this).parent().siblings().removeClass('on');
            twodep.stop().slideUp();
            
            if($(this).siblings('.twoD').is(':hidden')){
                $(this).siblings().stop().slideDown();
                
            }
        thrdep.on('click',function(){
            $(this).toggleClass('on');
            $(this).next().toggle();
            
            });
        
        });
        
        
        
    $(window).scroll(function(){
        
        var windScr = $(window).scrollTop();
        console.log(windScr);
        if(windScr >= 100){
            $('.topBtn').fadeIn();
            
           } else{
           $('.topBtn').fadeOut();
           }
    });
     $('.topBtn').on('click',function(){
         $('html ,body').animate({'scrollTop':'0'},600)
    });
    
    $(window).scroll(function(){
         var windScr = $(window).scrollTop();
        if(windScr >= 150){
            $('#header').addClass('on');   
        }else{
            
        }
    });
    

});