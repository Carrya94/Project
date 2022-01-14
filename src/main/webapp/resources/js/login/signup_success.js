var init_signup_success = function(){

    $("#btn_signup_home").on("click", function () {

        ajaxPageFunction('GET', '/');
    });

    $("#btn_signup_login").on("click", function () {

        ajaxPageFunction('GET', '/login.do');
    });
    
}



    
$(document).ready(function() {
	//호출되는 시점 바인딩
	init_signup_success();
}); 