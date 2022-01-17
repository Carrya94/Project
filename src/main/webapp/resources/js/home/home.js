//Render
$(document).ready(function() {

    $("btn-buy").on(click, function(){
        ajaxPageFunction('GET', '/months.do')
    });

    // beans 초기화면

    var iPageNum = 0;

    GetBeansFunction('SALE');

    $("#beans_next").on("click", function () {

        

        if (iPageNum < 3) {
            iPageNum++;
            console.log(iPageNum);
            //plus
            if (1 == iPageNum) {
                //2번페이지			
    
                $('#beans_slider1').css('display','none');
                $('#beans_slider2').css('display','flex');
                $('#beans_slider3').css('display','none');
    
            } else if (2 == iPageNum) {
    
                $('#beans_slider1').css('display','none');
                $('#beans_slider2').css('display','none');
                $('#beans_slider3').css('display','flex');
    
            } else {
                ;
            }
        } else {
            ;
        }
        
	});

    $("#beans_prev").on("click", function () {

        //minus
        iPageNum--;
        

            if (1 == iPageNum) {
                //2번페이지
    
                $('#beans_slider1').css('display','none');
                $('#beans_slider2').css('display','flex');
                $('#beans_slider3').css('display','none');
    
            } else if (0 == iPageNum) {
    
                $('#beans_slider1').css('display','flex');
                $('#beans_slider2').css('display','none');
                $('#beans_slider3').css('display','none');
            
            } else if (iPageNum < 0) {
                alert("다음페이지 없습니다");
                iPageNum = 0;
            } else {;}
        
        
	});

    //gifticon 초기화면
    var jPageNum = 0;
    
    GetGifticonFunction('PERSONALCAFE');

    $("#gifticon_next").on("click", function () {

        

        if (jPageNum < 3) {
            jPageNum++;
            console.log(jPageNum);
            //plus
            if (1 == jPageNum) {
                //2번페이지			
    
                $('#gifticon_slider1').css('display','none');
                $('#gifticon_slider2').css('display','flex');
                $('#gifticon_slider3').css('display','none');
    
            } else if (2 == jPageNum) {
    
                $('#gifticon_slider1').css('display','none');
                $('#gifticon_slider2').css('display','none');
                $('#gifticon_slider3').css('display','flex');
    
            } else {
                ;
            }
        } else {
            ;
        }
        
	});

    $("#gifticon_prev").on("click", function () {

        //minus
        
        
            jPageNum--;

            if (1 == jPageNum) {
                //2번페이지
    
                $('#gifticon_slider1').css('display','none');
                $('#gifticon_slider2').css('display','flex');
                $('#gifticon_slider3').css('display','none');
    
            } else if (0 == jPageNum) {
    
                $('#gifticon_slider1').css('display','flex');
                $('#gifticon_slider2').css('display','none');
                $('#gifticon_slider3').css('display','none');
            
            } else if (jPageNum < 0) {
                alert("다음페이지가 없습니다.");
                jPageNum = 0;
            } else {
                ;
            }

        
	});
    

});

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
         
        $('#beans_slider1').empty();
        $('#beans_slider2').empty();
        $('#beans_slider3').empty();

        for (var i = 0; i < i_resultSet.length; i++) {
            var beansSlider = ""
              , ibeansCount = 0
            ;
        
            if (i <= 2) {
                //beans_slider1
                ibeansCount = (i + 1).valueOf();

                beansSlider += '<div class="art1-sale-img' + ibeansCount + ' slider1">'
                beansSlider += '<img src="' + i_resultSet[i].bean_img_src + '" alt="">';
                beansSlider += '<p>' + i_resultSet[i].bean_name + '</p>'; //bean_name
                beansSlider += '<p>' + i_resultSet[i].bean_origin_price + '</p>'; //bean_origin_price
                beansSlider += '</div>';
                $('#beans_slider1').append(beansSlider);
            } else {;}

            if (3 <= i && i <= 5) {
                //beans_slider2
                ibeansCount = (i + 1).valueOf();

                beansSlider += '<div class="art1-sale-img' + ibeansCount + ' slider1">'
                beansSlider += '<img src="' + i_resultSet[i].bean_img_src + '" alt="">';
                beansSlider += '<p>' + i_resultSet[i].bean_name + '</p>'; //bean_name
                beansSlider += '<p>' + i_resultSet[i].bean_origin_price + '</p>'; //bean_origin_price
                beansSlider += '</div>';
                $('#beans_slider2').append(beansSlider);
            } else {;}
            
            if (6 <= i && i <= 8) {
                //beans_slider3
                ibeansCount = (i + 1).valueOf();

                beansSlider += '<div class="art1-sale-img' + ibeansCount + ' slider1">'
                beansSlider += '<img src="' + i_resultSet[i].bean_img_src + '" alt="">';
                beansSlider += '<p>' + i_resultSet[i].bean_name + '</p>'; //bean_name
                beansSlider += '<p>' + i_resultSet[i].bean_origin_price + '</p>'; //bean_origin_price
                beansSlider += '</div>';
                $('#beans_slider3').append(beansSlider);
            } else {;}

        }

        
    } else {
        ;
        //DATA가 미존재
        //DATA가 존재하지 않을때는 어떻게할것인가에 대한 고민이 필요..??
    }
}



var GetGifticonFunction = function (i_key) {

    // Ajax
    var params = {
        gifticon_key : i_key
    }
    
    ajaxJsonFunction('getgifticon.json', params, bindGifticonData);
}

var bindGifticonData = function (i_resultSet) {
    
    for (var i = 0; i < i_resultSet.length; i++) {
        console.log(i_resultSet[i].gifticon_id);
        console.log(i_resultSet[i].gifticon_name);	
        console.log(i_resultSet[i].gifticon_id + '이미지 : ' + i_resultSet[i].gifticon_img_src);
    }

    if (0 < i_resultSet.length) {
        //DATA가 존재
    
        //초기화는 1회만
        $('#gifticon_slider1').empty();
        $('#gifticon_slider2').empty();
        $('#gifticon_slider3').empty();

        for (var i = 0; i < i_resultSet.length; i++) {
            var gifticonSlider = ""
              , igifticonCount = 0;

            if (i <= 2) {

                igifticonCount = (i + 1).valueOf();

                gifticonSlider += '<div class="art2-gifticon-img' + igifticonCount + ' slider2">'
                gifticonSlider += '<img src="' + i_resultSet[i].gifticon_img_src + '" alt="">';
                gifticonSlider += '<p>' + i_resultSet[i].gifticon_name + '</p>'; 
                gifticonSlider += '<p>' + i_resultSet[i].gifticon_price + '</p>'; 
                gifticonSlider += '</div>';
                $('#gifticon_slider1').append(gifticonSlider);
            } else {;}

            if (3 <= i && i <= 5) {

                igifticonCount = (i + 1).valueOf();

                gifticonSlider += '<div class="art2-gifticon-img' + igifticonCount + ' slider2">'
                gifticonSlider += '<img src="' + i_resultSet[i].gifticon_img_src + '" alt="">';
                gifticonSlider += '<p>' + i_resultSet[i].gifticon_name + '</p>'; 
                gifticonSlider += '<p>' + i_resultSet[i].gifticon_price + '</p>'; 
                gifticonSlider += '</div>';
                $('#gifticon_slider2').append(gifticonSlider);
            } else {;}
            
            if (6 <= i && i <= 8) {

                igifticonCount = (i + 1).valueOf();

                gifticonSlider += '<div class="art2-gifticon-img' + igifticonCount + ' slider2">'
                gifticonSlider += '<img src="' + i_resultSet[i].gifticon_img_src + '" alt="">';
                gifticonSlider += '<p>' + i_resultSet[i].gifticon_name + '</p>'; 
                gifticonSlider += '<p>' + i_resultSet[i].gifticon_price + '</p>'; 
                gifticonSlider += '</div>';
                $('#gifticon_slider3').append(gifticonSlider);
            } else {;}
            
        }
    } else {;}
    
}