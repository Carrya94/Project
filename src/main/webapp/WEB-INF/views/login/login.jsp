<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
	<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="resources/css/login/login.css" />
</head>
	<body>
	    <div class="container">
	    	
	        <jsp:include page="/WEB-INF/views/common/header3.jsp"/>
	        
	         <section>
            <div class="main-content">
                <div class="main-login">
                    <div class="login-join">
                        <div class="login">
                            <button id="btn_login_login">로그인</button>
                        </div>
                        <div class="join">
                            <button id="btn_login_signup">회원가입</button>
                        </div>
                    </div>
                    <div class="main-input">
                        <input type="text" id="login_id" name="login_id" placeholder="아이디 입력">
                        <input type="password" id="login_pw" name="login_pw" placeholder="패스워드 입력">
                    </div>
                    <div class="main-check-find">
                        <div class="id-check">
                            <input type="checkbox" id="check" name="check"><label for="check">아이디저장</label>
                        </div>
                        <div class="find">
                            <div class="id-find">
                                <button id="btn_login_idsearch">아이디 찾기</button>
                            </div>
                            <div class="pw-find">
                                <button id="btn_login_pwsearch">비밀번호 찾기</button>
                            </div>
                        </div>
                    </div>
                    <div class="main-button">
                        <button id="btn_login_submit">로그인</button>
                        <button id="btn_login_cacaco">카카오톡으로 로그인</button>
                    </div>
                </div>
            </div>
        </section>
	
			<jsp:include page="/WEB-INF/views/common/footer.jsp"/>
			
	    </div>
	</body>
</html>

<script src="resources/js/login/login.js" type="text/javascript"></script>
<script src="resources/js/common/common.js" type="text/javascript"></script>
<script src="resources/js/common/header3.js" type="text/javascript"></script>
<script src="resources/js/common/footer.js" type="text/javascript"></script>
