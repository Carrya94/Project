//discharge = {};

var init_login = function() {
	$("#btn_login_submit").on("click", function () {
		var params = {
			login_id : $('#login_id').val()
		  , login_pw : $('#login_pw').val()
		}
		
		//ajaxJsonFunction('/logincheck.do', params, loginCallbackFunction);
		
		//discharge.login_id = $('#login_id').val();
		//discharge.login_pw = $('#login_pw').val();

		//ajaxJsonFunction('/logincheck.do', params, loginCallbackFunction);
		var returnData = ajaxJsonResultFunction('/logincheck.do', params);

		if (1 == returnData[0].login_count) {

			//ajaxPageFunction('GET', '/signup.do');

			ajaxPageFunction('GET', '/login_after_home.do');
	
		} else {
			alert('로그인이 실패되었습니다');
		}
	});
	
	$("#btn_login_signup").on("click", function () {
        ajaxPageFunction('GET', '/signup.do');
	});
}

var loginCallbackFunction = function (i_resultSet) {
	if (1 == i_resultSet) {
		//ajaxJsonFunction('/login_after_home.do', params, loginCallbackFunction);
		//ajaxJsonPageFunction('/login_after_home.do', discharge);
		//ajaxJsonResultFunction('/login_after_home.do', discharge);
		ajaxPageFunction('GET', '/login_after_home.do');
	} else {
		;
	}
}
    
$(document).ready(function() {
	//호출되는 시점 바인딩
	init_login();
}); 