var init_cart = function () {
    

}

var GetCartFunction = function(){
	
    var params = {
        cart_key : ''
    }

    ajaxJsonFunction('/getcart.json', params, bindcartData);
}

var bindcartData = function (i_resultSet) {
    
}

//Render
$(document).ready(function() {
    //초기 init render
    init_cart();
});