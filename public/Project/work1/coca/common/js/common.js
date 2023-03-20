$(function(){
    var $menu = $('.nav .m'),
        $sec = $('.sec');
    
    console.log($menu); 
    console.log($sec);
 
    $menu.on('click','a',function(){
        console.log('a태그가 클릭되었습니다.');
        console.log( $(this));//a태그
        
        var $target = $(this).parent(),
            indexNum = $target.index(),
            section = $sec.eq(indexNum),
            offsetT = section.offset().top;
        
        $('html').animate({scrollTop : offsetT},800,'easeOutBack'); 
        
        console.log( $target  );
        console.log( indexNum  );
        console.log( section  );
        console.log( offsetT  );
        
        return false;
    });
    $(window).scroll(function(){
        var winScrollT = $(window).scrollTop(),  
            winScrollT2 = winScrollT + ($(window).height()/2);
        
        $.each( $sec, function(idx){
            var $targetSection = $sec.eq(idx),
                targetT =$targetSection.offset().top;
            
            if( targetT <= winScrollT2 ){
                $menu.removeClass('active');
                $menu.eq(idx).addClass('active');
            }
    });
    $('.sec div').mouseenter(function(){
        $(this).addClass('animate__shakeX');    
    });
    $('.sec div').mouseleave(function(){
        $(this).removeClass('animate__shakeX');    
    });

    
    });
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 5,
        loop: true,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        }, autoplay: {
        delay: 1500,
        },
    });
    
    $('.swiper-container').hover(function(){
        
        swiper.autoplay.stop();
        },function(){
        swiper.autoplay.start();    
    });
});