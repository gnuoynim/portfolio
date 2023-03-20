
$(function(){
    var gnbMenu = $("#gnb > li"),
        lang = $("#util .lang > a"),
        srch_btn = $("#header .right a.btnHeaderSrch"),
        close_btn =$(".srchArea .closeBtn");

     $(window).scroll(function(){
            if($(this).scrollTop()>150){
                if(!$('.header').hasClass('active')){
                    $('.header').addClass('active');
                }
            }else{
                if($('.header').hasClass('active')){
                    $('.header').removeClass('active');
                }
            }
        });
        $(window).scroll(function(){
            
            var srcTop = $(window).scrollTop(),
            srcHeight =$(window).height(),
            src_he =srcHeight*0.09,
            plus = srcTop+src_he,
            mCon1 = $('.mainCon1').offset().top,
            mCon2 = $('.mainCon2').offset().top,
            mCon3 = $('.mainCon3').offset().top,
            mCon4 = $('.mainCon4').offset().top,
            footer = $('#footer').offset().top;
        
        
        if(plus >= mCon1 && plus<=mCon2){
        
            $('.mainCon1 .mainTit').animate({'top':'0' , 'opacity':'1'},400,'swing');
            $('.mainCon1 .mainTxt').delay(600).animate({'top':'0', 'opacity':'1'},400,'swing');
            $('.mainCon1 .boxArea').delay(800).animate({'top':'0','opacity':'1'},400,'swing');
            
        }else if(plus>=mCon2 && plus<=mCon3){
            $('.mainCon2 .mainTit').delay(600).animate({'top':'0','opacity':'1'},400,'swing');
            $('.mainCon2 .mainTxt').delay(800).animate({'top':'0','opacity':'1'},400,'swing');
            $('.mainCon2 .rollArea').delay(1000).animate({'top':'0','opacity':'1'},400,'swing');
            
        }else if(plus>=mCon3 && plus<=mCon4){
            $('.mainCon3 .mainTit').delay(400).animate({'top':'0','opacity':'1'},400,'swing');
            $('.mainCon3 .mainCon3Tab').delay(600).animate({'top':'0','opacity':'1'},400,'swing');
            $('.mainCon3 .tabConWrap').delay(1000).animate({'top':'0','opacity':'1'},400,'swing');
        
        }else if(plus>=mCon4 && plus<=footer){
            $('.mainCon4 .mainTit').delay(400).animate({'top':'0','opacity':'1'},400,'swing');
            $('.mainCon4 .mainTxt').delay(600).animate({'top':'0','opacity':'1'},400,'swing');
            $('.mainCon4 .mainNews').delay(1000).animate({'top':'0','opacity':'1'},400,'swing');
        }    
        });

    gnbMenu.mouseenter(function(){
        $(this).children(".openDiv").show();
    });
    
    gnbMenu.mouseleave(function(){
       $(this).children(".openDiv").hide();
    });

    lang.click(function(){
        console.log(lang);
        $(this).hasClass("on");
        if($(this).hasClass("on")){
            $(this).removeClass("on");
            $(this).next().fadeOut();
        }else{
            $(this).addClass("on");
            $(this).next().fadeIn();
        }
    });
    
    srch_btn.click(function(){
        
        $(".srchArea").slideDown(); 
    });
    
    close_btn.click(function(){
        $(".srchArea").slideUp();
    });

    var main_vis_swiper = new Swiper('.mainVisArea .swiper-container', {
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        loop: true,
        },
        pagination: {
        el: '.swiper-pagination',clickable: true,
        },
        autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        },
    });
    
    $(".imgRollArea .swiper-pagination").append('<a href="#" class="playBtn">버튼</a>');
    $(".imgRollArea .swiper-pagination .playBtn").click(function(event){
        event.preventDefault();
        console.log($(this).hasClass("on"));
        
        console.log(!$(this).hasClass("on"));
        
        if(!$(this).hasClass("on")){
            main_vis_swiper.autoplay.stop();
            $(this).addClass("on");
            
           }else{
            main_vis_swiper.autoplay.start();
           $(this).removeClass("on");
           }
    });
    
    var tab_menu = $(".mainCon3Tab ul li"),
        tab_con = $(".tabConWrap .mainCon3List");
    
    tab_menu.click(function(event){
        event.preventDefault();
        
        var tc = $(this).children("a").attr("href");
        
        tab_con.hide();
        $(tc).show();
        
        tab_menu.children("a").removeClass("on");
        $(this).children("a").addClass("on");
           
    });
    
    var swiper = new Swiper('.rollArea .swiper-container', {
      slidesPerView: "auto",
      spaceBetween: 22,
      pagination: {
        el: '.swiper-pagination2',
        clickable: true,
      },autoplay: {
            delay:1000,
            disableOnInteraction: false,
        },scrollbar: {
        el: '.swiper-scrollbar',
        draggable:true, dragSize:43,
      },
        
    });
    var $famSite= $('#footer .bottom .familySite');
    $('#footer .bottom .familySite').click(function(){
         $famSite.find('ul').toggle();    
    });
    
    
    
});