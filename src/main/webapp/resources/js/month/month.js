var init_month = function(){
	console.log('month Page');
	

    $("#btn_month_subscribe").on("click", function () {
    
        ajaxPageFunction('GET', '/first_week.do');
    });
}















$(document).ready(function() {
	//호출되는 시점 바인딩
	init_month();
});