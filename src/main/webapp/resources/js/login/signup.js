var init_signup = function(){
	
}



$("#btn_signup_shop").on("click", function () {

        ajaxPageFunction('GET', '/signup_agree.do');
});

$("#btn_signup_login").on("click", function () {

        ajaxPageFunction('GET', '/login.do');
});
    
    

    
$(document).ready(function() {
	//호출되는 시점 바인딩
	init_signup();
}); 