
// 초기화면 설정

var init_gifticon = function(){
	console.log('gifticon Page');


}

// 기프티콘에 대한 DATA 가져오는 함수
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

            if (i <= 1) {

                igifticonCount = (i + 1).valueOf();

                gifticonSlider += '<div class="slider' + igifticonCount + ' slider-img">'
                gifticonSlider += '<img src="' + i_resultSet[i].gifticon_img_src + '" alt="">';
                gifticonSlider += '<p>' + i_resultSet[i].gifticon_name + '</p>'; 
                gifticonSlider += '<p>' + i_resultSet[i].gifticon_price + '</p>'; 
                gifticonSlider += '</div>';
                $('#gifticon_slider1').append(gifticonSlider);
            } else {;}

            if (2 <= i && i <= 3) {

                igifticonCount = (i + 1).valueOf();

                gifticonSlider += '<div class="slider' + igifticonCount + ' slider-img">'
                gifticonSlider += '<img src="' + i_resultSet[i].gifticon_img_src + '" alt="">';
                gifticonSlider += '<p>' + i_resultSet[i].gifticon_name + '</p>'; 
                gifticonSlider += '<p>' + i_resultSet[i].gifticon_price + '</p>'; 
                gifticonSlider += '</div>';
                $('#gifticon_slider2').append(gifticonSlider);
            } else {;}
            
            if (4 <= i && i <= 5) {

                igifticonCount = (i + 1).valueOf();

                gifticonSlider += '<div class="slider' + igifticonCount + ' slider-img">'
                gifticonSlider += '<img src="' + i_resultSet[i].gifticon_img_src + '" alt="">';
                gifticonSlider += '<p>' + i_resultSet[i].gifticon_name + '</p>'; 
                gifticonSlider += '<p>' + i_resultSet[i].gifticon_price + '</p>'; 
                gifticonSlider += '</div>';
                $('#gifticon_slider3').append(gifticonSlider);
            } else {;}

        }
    }
    
}



$(document).ready(function() {
	//호출되는 시점 바인딩
	init_gifticon();
}); 