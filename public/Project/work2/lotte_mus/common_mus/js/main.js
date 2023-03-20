$(function(){
     var m_swiper = new Swiper('.swiper-container', {
        speed:800,
        loop:true,
        autoplay: {
        delay: 2000,
        },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        },
        
    });
    
    $('.mainVisual .swiper-pagination').append('<a href="#" class="playBtn"></a>');
    $('.mainVisual .swiper-pagination .playBtn').click(function(e){
        e.preventDefault();
        
        if(!$(this).hasClass('on')){
            
            $(this).addClass('on');
            swiper.autoplay.stop()
        }else{
            $(this).removeClass('on');
            swiper.autoplay.start()
        }
    });
    
    $('.mainCon1List li').each(function(idx ,ele){
        
        $(this).hover(function(){
            $('.mainCon1Bg div').eq(idx).fadeIn(600);
            
        },function(){
           $('.mainCon1Bg div').eq(idx).fadeOut(600);
        });
        
    });
    
    $(window).scroll(function(){
        
        var srcTop = $(window).scrollTop(),
            srcHeight =$(window).height(),
            src_he =srcHeight*0.09,
            plus = srcTop+src_he,
            mCon1 = $('.mainCon1').offset().top,
            mCon2 = $('.mainCon2').offset().top,
            mCon3 = $('.mainCon3').offset().top,
            footer = $('#footer').offset().top;
        
        
        if(plus >= mCon1 && plus<=mCon2){
            $('.mainTodayArea').animate({'top':'0', 'opacity':'1'},600,'swing');
            $('.mainCon1 .mainTit').delay(600).animate({'top':'0' , 'opacity':'1'},600,'swing');
            $('.mainCon1 .mainTxt').delay(800).animate({'top':'0', 'opacity':'1'},600,'swing');
            $('.mainCon1 .mainCon1List').delay(1000).animate({'top':'0','opacity':'1'},600,'swing');
            
        }else if(plus>=mCon2 && plus<=mCon3){
            $('.mainCon2 .mainTit').delay(600).animate({'top':'0','opacity':'1'},600,'swing');
            $('.mainCon2 .mainTxt').delay(800).animate({'top':'0','opacity':'1'},600,'swing');
            $('.mainCon2 .mainCon2List').delay(1000).animate({'top':'0','opacity':'1'},600,'swing');
            
        }else if(plus>=mCon3 && plus<=footer){
            $('.mainCon3 .mainTit').delay(600).animate({'top':'0','opacity':'1'},600,'swing');
            $('.mainCon3 .mainTxt').delay(800).animate({'top':'0','opacity':'1'},600,'swing');
            $('.mainCon3 .mainNews').delay(1000).animate({'top':'0','opacity':'1'},600,'swing');
        }
        
        
    });
    
    
    
});