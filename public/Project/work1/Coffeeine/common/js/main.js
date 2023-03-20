$(function(){
    /*swiper*/
    var swiper = new Swiper('.mainVisArea .swiper-container', {
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
        },
        loop : true,
    });
    
    /*mainCon scroll*/
    $(window).scroll(function(){
        var wScrollT = $(window).scrollTop(),
            wHeight = $(window).height(),
            wHeight2 = wHeight*0.7,
            mainScrollT = wScrollT + wHeight2,
            mCon1 = $('.mainCon1').offset().top,
            mCon2 = $('.mainCon2').offset().top,
            mCon3 = $('.mainCon3').offset().top,
            mCon4 = $('.mainCon4').offset().top,
            footr = $('#footer').offset().top;
        
        if( mainScrollT >= mCon1 && mainScrollT <= mCon2 ){
            $('.mainCon1 .container').animate({"top":"0","opacity":"1"},600, 'swing');
        }else if( mainScrollT >= mCon2 && mainScrollT <= mCon3 ){
            $('.mainCon2 h2').delay(600).animate({"top":"0","opacity":"1"},600, 'swing');
            $('.mainCon2 .newBx').delay(800).animate({"top":"0","opacity":"1"},600, 'swing');
        }else if( mainScrollT >= mCon3 && mainScrollT <= mCon4 ){
            $('.mainCon3 h2').delay(600).animate({"top":"0","opacity":"1"},600, 'swing');
            $('.mainCon3 .swiper-container').delay(800).animate({"top":"0","opacity":"1"},600, 'swing');
        }else if( mainScrollT >= mCon4 && mainScrollT <= footr ){
            $('.mainCon4 .con').delay(600).animate({"top":"0","opacity":"1"},600, 'swing');
            $('.mainCon4 .franCon').delay(600).animate({"top":"0","opacity":"1"},600, 'swing');
        }
        
        
    });
    
    /*mainCon Swiper*/
    var Con3Swiper = new Swiper('.mainCon3 .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        
    });
    
});


/*반응형 비주얼*/
$(function(){
  var $setElem =$('.swiper-slide .switch'),
        $width = window.innerWidth,
        replacewidth=756;
    $setElem.each(function(){
        var $this =$(this);
        
        function imgSize(){
            if(window.innerWidth < replacewidth){
                console.log('반응형 실행');
                $this.attr('src',$this.attr('src').replace("_.png","_m.png")).css({
                    visibility:'visible',
                    width:'100%',
                });
            }else{
               $this.attr('src',$this.attr('src').replace("_m.png","_.png")).css({
                    visibility:'visible',
                });
            }
        }$(window).resize(function(){
            imgSize();
        });
        imgSize();
        
    });
    
});