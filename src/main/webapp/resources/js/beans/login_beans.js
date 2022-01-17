
//초기화면 설정
var init_login_beans = function () {
	console.log('beans Page!');

	//GetBeansFunction();

    $("#beans_prev").on("click", function () {
        $('#main_slider1').css('display','flex');
        $('#main_slider2').css('display','none');
	});

    $("#beans_next").on("click", function () {
        $('#main_slider1').css('display','none');
        $('#main_slider2').css('display','flex');
	});

    $("#slider_hover").hover(function(){
        $('#hover_div').css("display", "flex");
    }, function(){
        $('#hover_div').css("display", "none");
    });

    $("#btn_payment").on("click", function () {
        ajaxPageFunction('GET', '/payment.do');
    });
}

//원두에 대한 DATA 가져오는 함수
var GetBeansFunction = function (i_key) {
	
	//Ajax!
	var params = {
		beans_key : i_key
    }

    ajaxJsonFunction('getbeans.json', params, bindBeansData);
}

var bindBeansData = function (i_resultSet) {
	console.log('bindBeansData Callback Function!');
	
	for (var i = 0; i < i_resultSet.length; i++) {
		console.log(i_resultSet[i].bean_id);
		console.log(i_resultSet[i].bean_name);
	}

    //beans_slider
    if (0 < i_resultSet.length) {
        //DATA가 존재
        // i_resultSet = bindbeansData
        // main_slider1 = 전체 div
        // beans_slider1 = main_slider1 안에 3개의 div
         
        $('#beans_slider1').empty();
        $('#beans_slider2').empty();
        $('#beans_slider3').empty();
        $('#beans_slider4').empty();
        $('#beans_slider5').empty();

        for (var i = 0; i < i_resultSet.length; i++) {
            var beansSlider = ""
              , ibeansCount = 0
            ;
        
            if (i <= 1) {
                //beans_slider1
                ibeansCount = (i + 1).valueOf();

                beansSlider += '<div class="slider' + ibeansCount + ' slider-img" id="slider_hover">';                
                beansSlider += '<img src="' + i_resultSet[i].bean_img_src + '" alt="">';
                beansSlider += '<p>' + i_resultSet[i].bean_name + '</p>'; //bean_name
                beansSlider += '<p>' + i_resultSet[i].bean_origin_price + '</p>'; //bean_origin_price
                beansSlider += '<div class="beans-payment-cart" id="hover_div">';
                beansSlider += '<div class="beans-payment-title"><h1>' + i_resultSet[i].bean_name + '</h1></div>';
                beansSlider += '<div class="beans-button">';
                beansSlider += '<div class="beans-payment">';
                beansSlider += '<button id="btn_payment">결제하기</button>';
                beansSlider += '</div>';
                beansSlider += '<div class="beans-cart">';
                beansSlider += '<button id="btn_cart">장바구니</button>';
                beansSlider += '</div>';
                beansSlider += '</div>';
                beansSlider += '</div>';
                beansSlider += '</div>';
                $('#beans_slider1').append(beansSlider);
            } else {;}

            if (2 <= i && i <= 3) {
                //beans_slider2
                ibeansCount = (i + 1).valueOf();

                beansSlider += '<div class="slider' + ibeansCount + ' slider-img" id="slider_hover">'
                beansSlider += '<img src="' + i_resultSet[i].bean_img_src + '" alt="">';
                beansSlider += '<p>' + i_resultSet[i].bean_name + '</p>'; //bean_name
                beansSlider += '<p>' + i_resultSet[i].bean_origin_price + '</p>'; //bean_origin_price
                beansSlider += '<div class="beans-payment-cart" id="hover_div">'
                beansSlider += '<div class="beans-payment-title"><h1>' + i_resultSet[i].bean_name + '</h1></div>'
                beansSlider += '<div class="beans-button">'
                beansSlider += '<div class="beans-payment">'
                beansSlider += '<button id="btn_payment">결제하기</button>'
                beansSlider += '</div>'
                beansSlider += '<div class="beans-cart">'
                beansSlider += '<button id="btn_cart">장바구니</button>'
                beansSlider += '</div>'
                beansSlider += '</div>'
                beansSlider += '</div>'
                beansSlider += '</div>'
                $('#beans_slider2').append(beansSlider);
            } else {;}
            
            if (4 <= i && i <= 5) {
                //beans_slider3
                ibeansCount = (i + 1).valueOf();

                beansSlider += '<div class="slider' + ibeansCount + ' slider-img" id="slider_hover">'
                beansSlider += '<img src="' + i_resultSet[i].bean_img_src + '" alt="">';
                beansSlider += '<p>' + i_resultSet[i].bean_name + '</p>'; //bean_name
                beansSlider += '<p>' + i_resultSet[i].bean_origin_price + '</p>'; //bean_origin_price
                beansSlider += '<div class="beans-payment-cart" id="hover_div">'
                beansSlider += '<div class="beans-payment-title"><h1>' + i_resultSet[i].bean_name + '</h1></div>'
                beansSlider += '<div class="beans-button">'
                beansSlider += '<div class="beans-payment">'
                beansSlider += '<button id="btn_payment">결제하기</button>'
                beansSlider += '</div>'
                beansSlider += '<div class="beans-cart">'
                beansSlider += '<button id="btn_cart">장바구니</button>'
                beansSlider += '</div>'
                beansSlider += '</div>'
                beansSlider += '</div>'
                beansSlider += '</div>'
                $('#beans_slider3').append(beansSlider);
            } else {;}

            if (6 <= i && i <= 7) {
                //beans_slider4
                ibeansCount = (i + 1).valueOf();

                beansSlider += '<div class="slider' + ibeansCount + ' slider-img" id="slider_hover">'
                beansSlider += '<img src="' + i_resultSet[i].bean_img_src + '" alt="">';
                beansSlider += '<p>' + i_resultSet[i].bean_name + '</p>'; //bean_name
                beansSlider += '<p>' + i_resultSet[i].bean_origin_price + '</p>'; //bean_origin_price
                beansSlider += '<div class="beans-payment-cart" id="hover_div">'
                beansSlider += '<div class="beans-payment-title"><h1>' + i_resultSet[i].bean_name + '</h1></div>'
                beansSlider += '<div class="beans-button">'
                beansSlider += '<div class="beans-payment">'
                beansSlider += '<button id="btn_payment">결제하기</button>'
                beansSlider += '</div>'
                beansSlider += '<div class="beans-cart">'
                beansSlider += '<button id="btn_cart">장바구니</button>'
                beansSlider += '</div>'
                beansSlider += '</div>'
                beansSlider += '</div>'
                beansSlider += '</div>'
                $('#beans_slider4').append(beansSlider);
            } else {;}

            if (8 <= i && i <= 9) {
                //beans_slider5
                ibeansCount = (i + 1).valueOf();

                beansSlider += '<div class="slider' + ibeansCount + ' slider-img" id="slider_hover">'
                beansSlider += '<img src="' + i_resultSet[i].bean_img_src + '" alt="">';
                beansSlider += '<p>' + i_resultSet[i].bean_name + '</p>'; //bean_name
                beansSlider += '<p>' + i_resultSet[i].bean_origin_price + '</p>'; //bean_origin_price
                beansSlider += '<div class="beans-payment-cart" id="hover_div">'
                beansSlider += '<div class="beans-payment-title"><h1>' + i_resultSet[i].bean_name + '</h1></div>'
                beansSlider += '<div class="beans-button">'
                beansSlider += '<div class="beans-payment">'
                beansSlider += '<button id="btn_payment">결제하기</button>'
                beansSlider += '</div>'
                beansSlider += '<div class="beans-cart">'
                beansSlider += '<button id="btn_cart">장바구니</button>'
                beansSlider += '</div>'
                beansSlider += '</div>'
                beansSlider += '</div>'
                beansSlider += '</div>'
                $('#beans_slider5').append(beansSlider);
            } else {;}
            
            
        }

        
    } else {
        ;
        //DATA가 미존재
   
    }
}

$(document).ready(function() {
	//호출되는 시점 바인딩
	init_login_beans();
}); 