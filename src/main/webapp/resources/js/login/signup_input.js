var init_signup_agree = function() {
    var valid_id    = false
      , valid_pw    = false
      , valid_name  = false
      , valid_mail  = false
      , valid_phone = false;
      
    //회원가입 버튼을 최종적으로 눌렀을때!
    $("#btn_signup_join").on("click", function () {

        var userId          = $('#member_id').val()
          , userPw          = $('#member_password').val()
          , userName        = $('#member_name').val()
          , userAddr        = $('#member_addr').val()
          , userEmail       = $('#member_email').val()
          , userPhone       = $('#member_phone').val()
          , userGender      = $('input[name="member_gender"]:checked').val()
          , userBirth       = $('#member_birth').val()
          , userRecommender = $('#member_recommender').val()

        var params = {
            // * key value
            user_id : userId,
            user_pw : userPw,
            user_name : userName,
            user_addr : userAddr,
            user_email : userEmail,
            user_phone : userPhone,
            user_gender : userGender,
            user_birth : userBirth,
            user_recommender : userRecommender
        }

        if (valid_id 
            && valid_pw 
            && valid_name 
            && valid_mail 
            && valid_phone) {
            //모든 유효성검증이 완료되었을경우 &&절로 모두다 true값이 떨어져야만 아래에있는 회원가입 Insert로직 진행!

            var validParams = {
                member_id : userId
            }

            var returnData = ajaxJsonResultFunction('/useridcheck.json', validParams);

            console.log(returnData[0].member_count);

            if (0 == returnData[0].member_count) {
                ajaxJsonFunction('/hashMapTest.json', params, memberCallbackFunction);
            } else {
                alert('중복된 아이디가 존재합니다.');
            }

        } else {
            if (!valid_id) {
                alert('아이디 입력을 확인해주세요.');
                return;
            } else {;}

            if (!valid_pw) {
                alert('패스워드 입력을 확인해주세요.');
                return;
            } else {;}

            if (!valid_name) {
                alert('이름 입력을 확인해주세요.');
                return;
            } else {;}

            if (!valid_mail) {
                alert('이메일 입력을 확인해주세요.');
                return;
            } else {;}

            if (!valid_phone) {
                alert('핸드폰번호 입력을 확인해주세요.');
                return;
            } else {;}
        }
    });

    //모든 공백 체크 정규식 
    var empCk = /\s/g; 
    //아이디 정규식 
    //var idCk = /^[a-z0-9][a-z0-9_\-]{4,19}$/; 
    var idCk = RegExp(/^[a-zA-Z0-9]{4,12}$/);
    // 비밀번호 정규식 
    var pwCk = /^[A-Za-z0-9]{4,12}$/; 
    
    // 이름 정규식 
    var nameCk = /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/; 
    // 이메일 검사 정규식 
    var emailCk = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; 
    // 휴대폰 번호 정규식 
    var phoneCk = /^01([0|1|6|7|8|9]?)?([0-9]{3,4})?([0-9]{4})$/;
    
    $('#member_id').keyup(function() {

        var userId = $('#member_id').val();

        $('#id_check').empty();
        
        if (!idCk.test(userId)) {
            //유효성검증에 걸림!
            //유효성에대한 text값 바인딩!
            $('#id_check').append('4~12자의 영문, 숫자만 입력 가능합니다');
        } else {
            valid_id = true;
        }
    });

    $('#member_password').keyup(function() {

        var userPw = $('#member_password').val();
        
        $('#pw_check').empty();

        if (!pwCk.test(userPw)) {
            $('#pw_check').append('4~12자의 영문 대소문자, 숫자만 입력 가능합니다.')
        } else {
            valid_pw = true;
        }
    });

    $('#member_password_Confirm').keyup(function() {

        var userPw = $('#member_password').val();
        var userPwcf = $('#member_password_Confirm').val();
        
        $('#pwcf_check').empty();

        if (userPw != userPwcf) {
            $('#pwcf_check').append('비밀번호가 다릅니다.')
        } else {;}
    });

    $('#member_name').keyup(function() {

        var userName = $('#member_name').val();
        
        $('#name_check').empty();

        if (!nameCk.test(userName)) {
            $('#name_check').append('2~4자의 한글만 입력 가능합니다.')
        } else {
            valid_name = true;
        }
    });

    $('#member_email').keyup(function() {

        var userEmail = $('#member_email').val();
        
        $('#email_check').empty();

        if (!emailCk.test(userEmail)) {
            $('#email_check').append('이메일을 제대로 입력해주세요.')
        } else {
            valid_mail = true;
        }
    });

    $('#member_phone').keyup(function() {

        var userPhone = $('#member_phone').val();
        
        $('#phone_check').empty();

        if (!phoneCk.test(userPhone)) {
            $('#phone_check').append('10~11자의 핸드폰번호를 -없이 입력해주세요')
        } else {
            valid_phone = true;
        }
    });
}

var memberCallbackFunction = function (i_resultSet) {
    console.log(i_resultSet)
    if (1 == i_resultSet) {
        ajaxPageFunction('GET', '/signup_success.do');
    } else {
        alert('회원가입이 실패되었습니다');
    }
}

//회원가입이 정상적으로 행위가 끝났을 때 부르는 함수!
 
    
$(document).ready(function() {
	//호출되는 시점 바인딩
	init_signup_agree();
}); 