$(document).ready(function(){
    
    // gnb
    $("#gnb > li").mouseenter(function(){ 
        $('#header').addClass('on'); 
    }); 
    
    $("#gnb > li").mouseleave(function(){ 
       $('#header').removeClass('on');
    });
    
    // 
    
    $('#userId').focus();
    $('#userId').focusin( function(){
        $(this).parent().prev('label').hide()
    });
    
    var viewBtn = $('.agree-wrap .view');
    
    viewBtn.click(function(e){
        
        // <a href="#"> 
        // # 현재 페이지 특정 이름값으로 이동도 가능
        // # 임시링크
        // 링크 실행 방지
        e.preventDefault();
        
        console.log( $(this).parent() ); //div
        console.log( $(this).parent().parent() ); //li
        console.log( $(this).parent().parent().hasClass('open') ); // fase
        
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
    
    // 로그인 양식
    // 버튼 type=submit 클릭하면 action 실행 
    // 양식이 전송될때 양식의 id값, name 값 선택자로 사용
    $('#loginForm').submit(function(){
        if( $('#userEmail').val() == "" ){ // 이메일을 입력하지 않으면
            $('#email-msg').css('display','block').html('이메일을 입력 하세요');
        }else{
            $('#email-msg').text('').css('display','none'); //빈문자열, 에러메시지 박스 안보이게
        }
        
        if( $('#userPwd').val() == "" ){ // 비밀번호를 입력하지 않으면
            $('#pw-msg').css('display','block').html('비밀번호를 입력 하세요');
        }else if( $('#userPwd').val().length < 4 ){ // 비밀번호가 4자 이상
            $('#pw-msg').css('display','block').html('비밀번호는 4자 이상');         
        }else{
            $('#pw-msg').text('').css('display','none'); //빈문자열, 에러메시지 박스 안보이게
        }
        return false;
    }); //loginForm end
    
    //회원정보 입력 양식
    $('#joinForm').submit(function(){
        
        if( $('#userId').val() == "" ){ // 아이디를 입력하지 않으면
            $('#id-msg').css('display','block').html('아이디를 입력 하세요');
        }else{
            $('#id-msg').text('').css('display','none'); //빈문자열, 에러메시지 박스 안보이게
        }
        
        if( $('#userPwd').val() == "" ){ // 비밀번호를 입력하지 않으면
            $('#pw1-msg').css('display','block').html('비밀번호를 입력 하세요');
        }else if( $('#userPwd').val().length < 8 ){ // 비밀번호가 8자 이상
            $('#pw1-msg').css('display','block').html('비밀번호는 8자 이상');         
        }else{
            $('#pw1-msg').text('').css('display','none'); //빈문자열, 에러메시지 박스 안보이게
        }

        if( $('#userPwd').val() != $('#userPwdConfirm').val() ){ 
            // 비밀번호 입력, 비밀번호 확인의 값이 다르다면
            $('#pw2-msg').css('display','block').html('비밀번호가 일치하지 않습니다');   
        }else{
            $('#pw2-msg').text('').css('display','none'); //빈문자열, 에러메시지 박스 안보이게
        }
        
        if( $('#phoneNumber').val() == "" ){ 
             $('#pnum-msg').css('display','block').html('연락처를 입력 하세요');   
        }else{
            $('#pnum-msg').text('').css('display','none'); //빈문자열, 에러메시지 박스 안보이게
        }

        if( $('.email-rcv:checked').length == 0 ){ //이메일 수신여부 체크를 안하면
           $('#email-rcv-msg').css('display','block').html('수신여부를 선택하세요');   
        }else{
            $('#email-rcv-msg').text('').css('display','none'); //빈문자열, 에러메시지 박스 안보이게
        }
  
        return false;
    }); //joinForm end
    
    
    // 약관동의
    $('#agreeAll').click(function(){
        chkAll(); 
    });

    function chkAll(){
        console.log('체크');
        
        var chk = $('#agreeAll').is(':checked');
        console.log(chk);
        
        if(chk) { 
            $('input[type=checkbox]').prop('checked', true); // 체크박스 전체 선택
        }else{
            $('input[type=checkbox]').prop('checked', false); // 체크박스 전체 해제
        }    
    }
    
    
}); // ready end




