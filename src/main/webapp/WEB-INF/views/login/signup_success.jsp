<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
	<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="resources/css/login/signup_success.css" />
</head>
	<body>
	    <div class="container">
	    	
	        <jsp:include page="/WEB-INF/views/common/header3.jsp"/>
	        
				 <section>
            <div class="main-content">
                <div class="main-title">
                    <div class="main-title-text1">
                        <p>회원가입</p>
                    </div>
                    <div class="main-title-text2"> 
                        <p><span class="main-title-span1">01 약관동의</span> > <span class="main-title-span2">02 정보입력</span> > <span class="main-title-span3">03 가입완료</span></p>
                    </div>
                </div>
                <div class="main-complet">
                    <div class="main-complet-img">
                        <img src="/resources/images/signup_success.jpg" alt="" >
                    </div>
                    <div class="main-complet-text1">
                        <p>회원가입이 <span class="complet-span1">완료</span>되었습니다.</p>
                    </div>
                    <div class="main-complet-text2">
                        <p>
                            <span class="complet-span2" id="member_name"></span>님의 회원가입을 축하드립니다.<br>
                            알차고 신속있는 서비스로 찾아뵙겠습니다.
                        </p>
                    </div>
                    <div class="main-complet-move">
                        <div class="move-home">
                            <button id="btn_signup_home">홈으로</button>
                        </div>
                        <div class="move-login">
                            <button id="btn_signup_login">로그인</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	
			<jsp:include page="/WEB-INF/views/common/footer.jsp"/>
			
	    </div>
	</body>
</html>

<script src="resources/js/login/signup_success.js" type="text/javascript"></script>
<script src="resources/js/common/common.js" type="text/javascript"></script>
<script src="resources/js/common/header3.js" type="text/javascript"></script>
<script src="resources/js/common/footer.js" type="text/javascript"></script>
