
$(function(){
    $('.menu_view_wrapper .menu_info .menu_img').hover(function(){
        console.log(this);
        $(this).addClass('animate__shakeX');    
    });
     $('.menu_view_wrapper .menu_info .menu_img').mouseleave(function(){
        console.log(this);
        $(this).removeClass('animate__shakeX');    
    });
    $('.menu_view_wrapper .hd .category button').click(function(){
        
        $('.menu_view_wrapper .hd .category a').css('display', 'inline-block');
        $('button').addClass('open').click(function(){
            $('.menu_view_wrapper .hd .category a').css('display', 'none');    
        });
 
    });
    
    
});