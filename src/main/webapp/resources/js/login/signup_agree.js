var init_signup_agree = function(){
	
}



$("#btn_agree_next").on("click", function () {

        ajaxPageFunction('GET', '/signup_input.do');
});

$("#btn_agree_prev").on("click", function () {

        ajaxPageFunction('GET', '/signup.do');
});
    
    
$(document).ready(function() {
	//호출되는 시점 바인딩
	init_signup_agree();
}); 