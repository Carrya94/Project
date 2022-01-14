var init_month_info = function(){
	console.log('month Page');
	GetMonthFunction();

    // 이전단계
    $("#btn_monthinfo_prev").on("click", function () {
    
        ajaxPageFunction('GET', '/first_week.do');
    });

    //결제하기
    $("#btn_monthinfo_next").on("click", function () {
    
        ajaxPageFunction('GET', '/first_week.do');
    });


}

// 1,2,3,4 주차 DATA 가져오는 함수
var GetMonthFunction = function () {
    //Ajax
    var params = {
        month_key : ''
    }

    ajaxJsonFunction('/getmonth.json', params, bindmonthData);
}

var bindmonthData = function (i_resultSet) {
    //5개
    //데이터는 하나만 하만 하는거지

    /*
        ! 있으면 업데이트하고
        ! 없으면 인설트하는게 --> upsert!

        first_week_bean
        first_week_grind
        four_week_bean
        four_week_grind
        second_week_bean
        second_week_grind
        third_week_bean
        third_week_grind
    */
    if (0 < i_resultSet.length) {
        //DATA가 존재
    
        //초기화
        $('#first_week').empty();
        $('#second_week').empty();
        $('#third_week').empty();
        $('#four_week').empty();

        var resultUpper = ''
          , resultLow = ''
          , resultData1 = ''
          , resultData2 = ''
        ;

        /*
            first_week_bean
            first_week_grind
            four_week_bean
            four_week_grind
            second_week_bean
            second_week_grind
            third_week_bean
            third_week_grind
        */
        
        for (var i = 0; i < 4; i++) {
            if (0 == i) {
                //1
                resultUpper = 'First';
                resultLow = 'first';
                resultData1 = i_resultSet[0].first_week_bean;
                resultData2 = i_resultSet[0].first_week_grind;
                
            } else if (1 == i) {
                //2
                resultUpper = 'Second';
                resultLow = 'second';
                resultData1 = i_resultSet[0].second_week_bean;
                resultData2 = i_resultSet[0].second_week_grind;

            } else if (2 == i) {
                //3
                resultUpper = 'Third';
                resultLow = 'third';
                resultData1 = i_resultSet[0].third_week_bean;
                resultData2 = i_resultSet[0].third_week_grind;
            } else if (3 == i) {
                //4
                resultUpper = 'Four';
                resultLow = 'four';
                resultData1 = i_resultSet[0].four_week_bean;
                resultData2 = i_resultSet[0].four_week_grind;
            } else {;}

            var monthInfo = "";   
            monthInfo += '<div class="' + resultLow + '-week-title">';
            monthInfo += '<h1>' + resultUpper + ' week</h1>';
            monthInfo += '</div>';
            monthInfo += '<div class="' + resultLow + '-week-bean">';
            monthInfo += '<div class="' + resultLow + '-week-bean-title">';
            monthInfo += '<h2>원두</h2>';
            monthInfo += '</div>';
            monthInfo += '<div class="' + resultLow + '-week-bean-info">';
            monthInfo += '<p>' + resultData1 + '</p>';
            monthInfo += '</div>';
            monthInfo += '<div class="' + resultLow + '-week-grind">';
            monthInfo += '<div class="' + resultLow + '-week-grind-title">';
            monthInfo += '<h2>분쇄도</h2>';
            monthInfo += '</div>';
            monthInfo += '<div class="' + resultLow + '-week-grind-info">';
            monthInfo += '<p>' + resultData2 + '</p>';
            monthInfo += '</div>';
            monthInfo += '</div>';
            
            $('#' + resultLow + '_week').append(monthInfo);
        }
    }
}

$(document).ready(function() {
	//호출되는 시점 바인딩
	init_month_info();
});