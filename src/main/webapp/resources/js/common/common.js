

//페이지 공통함수
function ajaxPageFunction (i_type, i_url) {
    if ('GET' == i_type
        && '/' == i_url) {
        $.ajax({
            type: 'GET',
            url: '/',
            success: function (data) {
                //document.open();
                //document.write(data);
                //document.close();
                window.location.href= i_url;
                
            }
        });
    } else {
        $.ajax({
            type: i_type,
            url: i_url,
            success: function (data) {
                //document.open();
                //document.write(data);
                //document.close();
                window.location.href= i_url;
            }
        });
    }
}

//데이터 + page
/*
function ajaxJsonPageFunction (i_url, i_params, i_callbackFunction) {

    //DATA를 항상 보낼때는 JSON문자열로 만들어서 보내야 서버에서 받을수있음.

    $.ajax({
        type: 'POST',
        url: i_url,
        data: JSON.stringify(i_params),
        dataType: 'JSON',
        //async: false,
        contentType : "application/json; charset=UTF-8",
        success: function(sectionList)
        {
            window.location.replace(sectionList.returnURL);
            //window.location.href = sectionList.returnURL;
        },
        error: function(data)
        {
            console.log("data : " + data);
        }
    });
}
*/

//데이터 공통함수
function ajaxJsonFunction (i_url, i_params, i_callbackFunction) {
    $.ajax({
        url: i_url,
        type: "POST",
        data: i_params,
        async: false, //false 동기야 != default : true (비동기)
        success: function(resultSet) {
            if (0 == resultSet.length) {
                console.log('NO DATA!');
            } else {;}
            
            i_callbackFunction(resultSet);
        },
        error: function(){
            alert('Ajax ' + i_url + ' Fail!');
        }
    });
}

//데이터 공통함수
function ajaxJsonResultFunction (i_url, i_params) {
    var retrunData;

    $.ajax({
        url: i_url,
        type: "POST",
        data: i_params,
        async: false, //false 동기야 != default : true (비동기)
        success: function(resultSet) {
        	
            if (0 == resultSet.length) {
                console.log('NO DATA!');
            } else {;}

            retrunData = resultSet;
        },
        error: function(){
            alert('Ajax ' + i_url + ' Fail!');
        }
    });

    return retrunData;
}