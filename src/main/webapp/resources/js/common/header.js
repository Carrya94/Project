var init_header = function () {

	//이달의원두에 대한 DATA를 바인딩..
	GetBeansFunction('SALE');
	
	$('#li_bean_Sale').css('font-weight', 'bold');
	$('#li_bean_Special').css('font-weight', '');
	$('#li_bean_Ethiopia').css('font-weight', '');
	$('#li_bean_Guatemala').css('font-weight', '');
	$('#li_bean_Maker').css('font-weight', '');
	
	//----- TAB START
	$("#li_bean_Sale").on("click", function () {
    	console.log('li_bean_Sale');
		$('#li_bean_Sale').css('font-weight', 'bold');
		$('#li_bean_Special').css('font-weight', '');
		$('#li_bean_Ethiopia').css('font-weight', '');
		$('#li_bean_Guatemala').css('font-weight', '');
		$('#li_bean_Maker').css('font-weight', '');
		
		GetBeansFunction('SALE');
	});
	
	$("#li_bean_Special").on("click", function () {
    	console.log('li_bean_SpecialTEST!');
		$('#li_bean_Sale').css('font-weight', '');
		$('#li_bean_Special').css('font-weight', 'bold');
		$('#li_bean_Ethiopia').css('font-weight', '');
		$('#li_bean_Guatemala').css('font-weight', '');
		$('#li_bean_Maker').css('font-weight', '');
		
		GetBeansFunction('SPECIAL');
	});
	
	$("#li_bean_Ethiopia").on("click", function () {
    	console.log('li_bean_Ethiopia');
		$('#li_bean_Sale').css('font-weight', '');
		$('#li_bean_Special').css('font-weight', '');
		$('#li_bean_Ethiopia').css('font-weight', 'bold');
		$('#li_bean_Guatemala').css('font-weight', '');
		$('#li_bean_Maker').css('font-weight', '');
		
		GetBeansFunction('ETHIOPIA');
	});
	
	$("#li_bean_Guatemala").on("click", function () {
    	console.log('li_bean_Guatemala');
		$('#li_bean_Sale').css('font-weight', '');
		$('#li_bean_Special').css('font-weight', '');
		$('#li_bean_Ethiopia').css('font-weight', '');
		$('#li_bean_Guatemala').css('font-weight', 'bold');
		$('#li_bean_Maker').css('font-weight', '');
		
		GetBeansFunction('GUATEMALA');
	});
	
	$("#li_bean_Maker").on("click", function () {
    	console.log('li_bean_Maker');
		$('#li_bean_Sale').css('font-weight', '');
		$('#li_bean_Special').css('font-weight', '');
		$('#li_bean_Ethiopia').css('font-weight', '');
		$('#li_bean_Guatemala').css('font-weight', '');
		$('#li_bean_Maker').css('font-weight', 'bold');
		
		GetBeansFunction('MAKER');
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
    init_header();
});