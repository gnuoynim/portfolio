$(document).ready(function(){
    $("#gnb > li").mouseenter(function(){ 
        $('#header').addClass('on'); 
    }); 
    
    $("#gnb > li").mouseleave(function(){ 
       $('#header').removeClass('on');
    });
    
    $('#userId').focus();
    $('#userId').focusin( function(){
        $(this).parent().prev('label').hide()
    });
    
    var viewBtn = $('.agree-wrap .view');
    
    viewBtn.click(function(e){

        e.preventDefault();
        
        console.log( $(this).parent() );
        console.log( $(this).parent().parent() ); 
        console.log( $(this).parent().parent().hasClass('open') ); 
        
        if( $(this).parent().parent().hasClass('open') ){
            $(this).parent('div').parent('li').removeClass('open');
            $(this).parent('div').next('.policies').slideUp();
        }else{
            $(this).parent('div').parent('li').addClass('open');
            $(this).parent('div').next('.policies').slideDown();
        }

    });
    
    
    $('.int-box input').focus(function(){
        console.log('포커스');
        $(this).parent('span.int-box').prev('label').hide();
    });
    
   
    $('#loginForm').submit(function(){
        if( $('#userEmail').val() == "" ){ 
            $('#email-msg').css('display','block').html('이메일을 입력 하세요');
        }else{
            $('#email-msg').text('').css('display','none'); 
        }
        
        if( $('#userPwd').val() == "" ){ 
            $('#pw-msg').css('display','block').html('비밀번호를 입력 하세요');
        }else if( $('#userPwd').val().length < 4 ){ 
            $('#pw-msg').css('display','block').html('비밀번호는 4자 이상');         
        }else{
            $('#pw-msg').text('').css('display','none'); 
        }
        return false;
    }); 
    
    
    function chkFrm(){
        
        if( $('#userId').val() == "" ){ 
            $('#id-msg').css('display','block').html('아이디를 입력 하세요');
            return false;    
        }else{
            $('#id-msg').text('').css('display','none'); 
        }
        
        if( $('#userPwd').val() == "" ){ 
            $('#pw1-msg').css('display','block').html('비밀번호를 입력 하세요');
            return false;
        }else if( $('#userPwd').val().length < 8 ){ 
            $('#pw1-msg').css('display','block').html('비밀번호는 8자 이상');         
        }else{
            $('#pw1-msg').text('').css('display','none'); 
        }
        

        if( $('#userPwd').val() != $('#userPwdConfirm').val() ){ 
            
            $('#pw2-msg').css('display','block').html('비밀번호가 일치하지 않습니다');  
            return false;
        }else{
            $('#pw2-msg').text('').css('display','none'); 
        }
        
        if( $('#phoneNumber').val() == "" ){ 
             $('#pnum-msg').css('display','block').html('연락처를 입력 하세요');   
            return false;
        }else{
            $('#pnum-msg').text('').css('display','none'); 
        }

        if( $('.email-rcv:checked').length == 0 ){ 
           $('#email-rcv-msg').css('display','block').html('수신여부를 선택하세요');  
            return false;
        }else{
            $('#email-rcv-msg').text('').css('display','none'); 
        }
  
        return false;
    }); 
    
    
    // 약관동의
    $('#agreeAll').click(function(){
        chkAll(); 
    });

    function chkAll(){
        console.log('체크');
        
        var chk = $('#agreeAll').is(':checked');
        console.log(chk);
        
        if(chk) { 
            $('input[type=checkbox]').prop('checked', true); 
        }else{
            $('input[type=checkbox]').prop('checked', false); 
        }    
    }
    
    
}); 




