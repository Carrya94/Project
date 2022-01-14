var init_main_header = function () {


    //beans
    $("#btn_start_beans").on("click", function () {
       
        ajaxPageFunction('GET', '/login_beans.do');
        
    });
    //gifticon
    $("#btn_start_gifticon").on("click", function () {
        console.log('gifticon Page GO!');
        
        ajaxPageFunction('GET', '/login_gifticon.do');
        
         
    });

    //month
    $("#btn_start_month").on("click", function () {
        console.log('month Page GO!');
        
        ajaxPageFunction('GET', '/month.do');
        
    });

    //logo
    $("#div_headerLogo").on("click", function () {
    	console.log('MainPage Go!');
        ajaxPageFunction('GET', '/login_after_home.do');
    });
    
    //마이페이지
    $("#btn_start_mypage").on("click", function () {
        console.log('mypage Page GO!');
        
        ajaxPageFunction('GET', '/mypage.do');
        
    });

    // 장바구니 

    $("#btn_start_basket").on("click", function () {
        console.log('basket Page GO!');
        
        ajaxPageFunction('GET', '/basket.do');
        
    });

}

//Render
$(document).ready(function() {
    //초기 init render
    init_main_header();
});