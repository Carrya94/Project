<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
	<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="resources/css/login/signup.css" />
</head>
	<body>
	    <div class="container">
	    	
	        <jsp:include page="/WEB-INF/views/common/header3.jsp"/>
	        
	         <section>
            <div class="main-content">
                <div class="main-join">
                    <div class="login-join">
                        <div class="login">
                            <button id="btn_signup_login">로그인</button>
                        </div>
                        <div class="join">
                            <button id="btn_signup_signup">회원가입</button>
                        </div>
                    </div>
                    <div class="main-field">
                        <fieldset>
                            <div class="field-join">
                                <div class="field-content">
                                    <div class="site-join">
                                        <button id="btn_signup_shop">쇼핑몰 회원가입</button>
                                    </div>
                                    <div class="cacao-join">
                                        <button id="btn_signup_cacao">카카오톡으로 회원가입</button>
                                    </div>
                                    <div class="notice">
                                        <p>
                                            SNS계정을 연동하여 빠르고 쉽고 안전하게 회원가입 할 수 있습니다.<br>
                                            이 과정에서 고객님의 데이터는 철저하게 보호됩니다.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>
        </section>
	
			<jsp:include page="/WEB-INF/views/common/footer.jsp"/>
			
	    </div>
	</body>
</html>

<script src="resources/js/login/signup.js" type="text/javascript"></script>
<script src="resources/js/common/common.js" type="text/javascript"></script>
<script src="resources/js/common/header3.js" type="text/javascript"></script>
<script src="resources/js/common/footer.js" type="text/javascript"></script>
