var init_header = function () {

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