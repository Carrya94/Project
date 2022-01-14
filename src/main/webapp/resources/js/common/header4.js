var init_header4 = function () {


    //beans
    $("#btn_start_beans").on("click", function () {
       
        ajaxPageFunction('GET', '/beans.do');
        
    });
    //gifticon
    $("#btn_start_gifticon").on("click", function () {
        console.log('gifticon Page GO!');
        
        ajaxPageFunction('GET', '/gifticon.do');
        
         
    });

    //login
    $("#btn_start_login").on("click", function () {
        
        ajaxPageFunction('GET', '/login.do');
    });

    //signup
    $("#btn_start_signup").on("click", function () {
        
        ajaxPageFunction('GET', '/signup.do');
    });

    //month
    $("#btn_start_month").on("click", function () {
        console.log('month Page GO!');
        
        ajaxPageFunction('GET', '/months.do');
        
    });

    //logo
    $("#div_headerLogo").on("click", function () {
    	console.log('MainPage Go!');
        ajaxPageFunction('GET', '/');
    });

}

//Render
$(document).ready(function() {
    //초기 init render
    init_header4();
});