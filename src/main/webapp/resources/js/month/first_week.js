var init_first_week = function(){
	
	//txt_firstweek_title
	//txt_twoweek_title
	//txt_thirdweek_title
	//txt_fourweek_title

	var iPageNum = 0;
	

	//초기 셋팅
	$('#div_firstweek_title').css('display', '');
	$('#btn_first_next').css('display', '');
	$('#btn_first_prev').css('display', 'none');
	$('#container').css("background-image", "url(" + "/resources/images/month/1week.jpg" + ")")
				   .css("background-repeat", "no-repeat")
				   .css("background-size", "cover");
	
	//DDL
	$('#bean1').css('display', '');
	$('#grind1').css('display', '');

	$("#btn_first_next").on("click", function () {

		//plus
		iPageNum++;


		if (1 == iPageNum) {
			//2번페이지
			$('#bean2').css('display', '');
			$('#grind2').css('display', '');

			$('#bean1').css('display', 'none');
			$('#grind1').css('display', 'none');
			$('#bean3').css('display', 'none');
			$('#grind3').css('display', 'none');
			$('#bean4').css('display', 'none');
			$('#grind4').css('display', 'none');
			

			$('#div_twoweek_title').css('display', '');
			$('#div_firstweek_title').css('display', 'none');
			$('#div_thirdweek_title').css('display', 'none');
			$('#div_fourweek_title').css('display', 'none');

			$('#btn_first_next').css('display', '');
			$('#btn_first_prev').css('display', '');

			$('#container').css("background-image", "url(" + "/resources/images/month/2week.jpg" + ")")
		   	       .css("background-position", "50%")
				   .css("background-repeat", "no-repeat")
				   .css("background-size", "cover");
		}  else if (2 == iPageNum) {
			//3번페이지

			$('#bean3').css('display', '');
			$('#grind3').css('display', '');

			$('#bean1').css('display', 'none');
			$('#grind1').css('display', 'none');
			$('#bean2').css('display', 'none');
			$('#grind2').css('display', 'none');
			$('#bean4').css('display', 'none');
			$('#grind4').css('display', 'none');

			$('#div_thirdweek_title').css('display', '');
			$('#div_twoweek_title').css('display', 'none');
			$('#div_firstweek_title').css('display', 'none');
			$('#div_fourweek_title').css('display', 'none');


			$('#btn_first_next').css('display', '');
			$('#btn_first_prev').css('display', '');

			$('#container').css("background-image", "url(" + "/resources/images/month/3week.jpg" + ")")
		   	       .css("background-position", "10%")
				   .css("background-repeat", "no-repeat")
				   .css("background-size", "cover");
		}  else if (3 == iPageNum) {
			//4번페이지

			$('#bean4').css('display', '');
			$('#grind4').css('display', '');

			$('#bean1').css('display', 'none');
			$('#grind1').css('display', 'none');
			$('#bean2').css('display', 'none');
			$('#grind2').css('display', 'none');
			$('#bean3').css('display', 'none');
			$('#grind3').css('display', 'none');

			$('#div_fourweek_title').css('display', '');
			$('#div_thirdweek_title').css('display', 'none');
			$('#div_twoweek_title').css('display', 'none');
			$('#div_firstweek_title').css('display', 'none');

			$('#btn_first_next').css('display', '');
			$('#btn_first_prev').css('display', '');

			$('#container').css("background-image", "url(" + "/resources/images/month/4week.jpg" + ")")
		   	       .css("background-position", "45%")
				   .css("background-repeat", "no-repeat")
				   .css("background-size", "cover");
		} else if (4 == iPageNum) {
			//최종승인처리 후 화면 렌더링.
			var _params = {
				  ddl_first_bean  : $('#bean1').val()
				, ddl_first_grind : $('#grind1').val()
				, ddl_second_bean  : $('#bean2').val()
				, ddl_second_grind : $('#grind2').val()
				, ddl_third_bean  : $('#bean3').val()
				, ddl_third_grind : $('#grind3').val()
				, ddl_four_bean  : $('#bean4').val()
				, ddl_four_grind : $('#grind4').val()
				, member_id : Request.member_id
			}



			//최종확인
			console.log('first Page --> ddl_first_bean'  + ' : ' + _params.ddl_first_bean);
			console.log('first Page --> ddl_first_grind' + ' : ' + _params.ddl_first_grind);

			console.log('first Page --> ddl_second_bean' + ' : ' + _params.ddl_second_bean);
			console.log('first Page --> ddl_second_grind'+ ' : ' + _params.ddl_second_grind);

			console.log('first Page --> ddl_third_bean'  + ' : ' + _params.ddl_third_bean);
			console.log('first Page --> ddl_third_grind' + ' : ' + _params.ddl_third_grind);

			console.log('first Page --> ddl_four_bean'   + ' : ' + _params.ddl_four_bean);
			console.log('first Page --> ddl_four_grind'  + ' : ' + _params.ddl_four_grind);
			console.log('member_id'  + ' : ' + _params.member_id);

			ajaxJsonFunction('/month_input.json', _params, month_infoCallbackFunction);
		}

		
		

		//ajaxJsonFunction('/first_list.do', params, firstweekCallbackFunction);
	});

	$("#btn_first_prev").on("click", function () {

		iPageNum--;

		if (0 == iPageNum) {
			//1번페이지

			$('#bean1').css('display', '');
			$('#grind1').css('display', '');

			$('#bean2').css('display', 'none');
			$('#grind2').css('display', 'none');
			$('#bean3').css('display', 'none');
			$('#grind3').css('display', 'none');
			$('#bean4').css('display', 'none');
			$('#grind4').css('display', 'none');

			$('#div_twoweek_title').css('display', 'none');
			$('#div_firstweek_title').css('display', '');
			$('#div_thirdweek_title').css('display', 'none');
			$('#div_fourweek_title').css('display', 'none');

			$('#btn_first_next').css('display', '');
			$('#btn_first_prev').css('display', 'none');
			$('#container').css("background-image", "url(" + "/resources/images/month/1week.jpg" + ")")
				   .css("background-position", "100%")
				   .css("background-repeat", "no-repeat")
				   .css("background-size", "cover");
		}  else if (1 == iPageNum) {
			//2번페이지

			$('#bean2').css('display', '');
			$('#grind2').css('display', '');

			$('#bean1').css('display', 'none');
			$('#grind1').css('display', 'none');
			$('#bean3').css('display', 'none');
			$('#grind3').css('display', 'none');
			$('#bean4').css('display', 'none');
			$('#grind4').css('display', 'none');

			$('#div_thirdweek_title').css('display', 'none');
			$('#div_twoweek_title').css('display', '');
			$('#div_firstweek_title').css('display', 'none');
			$('#div_fourweek_title').css('display', 'none');


			$('#btn_first_next').css('display', '');
			$('#btn_first_prev').css('display', '');

			$('#container').css("background-image", "url(" + "/resources/images/month/2week.jpg" + ")")
		   	       .css("background-position", "50%")
				   .css("background-repeat", "no-repeat")
				   .css("background-size", "cover");
		}  else if (2 == iPageNum) {
			//3번페이지
			$('#bean3').css('display', '');
			$('#grind3').css('display', '');

			$('#bean1').css('display', 'none');
			$('#grind1').css('display', 'none');
			$('#bean2').css('display', 'none');
			$('#grind2').css('display', 'none');
			$('#bean4').css('display', 'none');
			$('#grind4').css('display', 'none');

			$('#div_fourweek_title').css('display', 'none');
			$('#div_thirdweek_title').css('display', '');
			$('#div_twoweek_title').css('display', 'none');
			$('#div_firstweek_title').css('display', 'none');

			$('#btn_first_next').css('display', '');
			$('#btn_first_prev').css('display', '');

			$('#container').css("background-image", "url(" + "/resources/images/month/3week.jpg" + ")")
		   	       .css("background-position", "10%")
				   .css("background-repeat", "no-repeat")
				   .css("background-size", "cover");
		} else {;}

	});
	    
	var month_infoCallbackFunction = function (i_resultSet) {
		console.log(i_resultSet)
		if (1 == i_resultSet) {
			ajaxPageFunction('GET', '/month_info.do');
		} else {
			alert('옵션을 선택해주세요.');
		}
	}
}



    
$(document).ready(function() {
	//호출되는 시점 바인딩
	init_first_week();
}); 