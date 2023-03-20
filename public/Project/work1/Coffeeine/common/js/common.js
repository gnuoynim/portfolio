$(function(){
    $('#gnb > li').mouseenter(function(){
        $('#header #gnb > li .towD').stop().slideDown();
        $('#header .gnbBg').stop().slideDown();
    });
    $('#header .gnbBg').mouseleave(function(){
        $('#header #gnb > li .towD').stop().slideUp();
        $('#header .gnbBg').stop().slideUp();
    });
});

$(function(){
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
        twodep = $('.mMenuArea .gnbArea > ul > li > .twoD');
    onedep.on('click',function(){
        $(this).parent().addClass('on');
        $(this).parent().siblings().removeClass('on');
        twodep.slideUp();

        if($(this).siblings('.twoD').is(':hidden')){
            $(this).siblings().slideDown();
        }
    });
});