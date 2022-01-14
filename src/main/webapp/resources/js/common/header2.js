var init_header2 = function () {
    
    GetGifticonFunction('PERSONALCAFE');
	
	
	$('#li-gifticon-Personalcafe').css('font-weight','bold');
	
	$("#li-gifticon-Personalcafe").on("click", function () {
        $('#li-gifticon-Personalcafe').css('font-weight','bold');
        $('#li-gifticon-Franchise').css('font-weight','');

        GetGifticonFunction('PERSONALCAFE');
	});
	
	$("#li-gifticon-Franchise").on("click", function () {
        $('#li-gifticon-Personalcafe').css('font-weight','');
        $('#li-gifticon-Franchise').css('font-weight','bold');
        
        GetGifticonFunction('MAKER');
    });

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
    init_header2();
});