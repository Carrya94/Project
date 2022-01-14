<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
	<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="resources/css/login/signup_input.css" />
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
                <div class="main-imformation">
                    <form id="signup_input"  method="Post">
                            <div class="main-imformation-id">
                                <input type="text" id="member_id" name="member_id" placeholder="아이디 입력">
                                <div class="id_font" id="id_check"></div>
                            </div>
                            <div class="main-imformation-pw">
                                <input type="password" id="member_password" name="member_password" placeholder="비밀번호 입력">
                                <div class="pw_font" id="pw_check"></div>
                            </div>
                            <div class="main-imformation-pwcf">
                                <input type="password" id="member_password_Confirm" name="member_password_Confirm" placeholder="비밀번호 확인">
                                <div class="pwcf_font" id="pwcf_check"></div>
                            </div>
                            <div class="main-imformation-name">
                                <input type="text" id="member_name" name="member_name" placeholder="이름">
                                <div class="name_font" id="name_check"></div>
                            </div>
                            <div class="main-imformation_addr">
                            	<input type="text" id="member_addr" name="member_addr" placeholder="주소">
                            	<div class="addr_font" id="addr_check"></div>
                            </div>
                            <div class="main-imformation-email">
                                <div class="main-email-input">
                                    <input type="email" id="member_email" name="member_email" placeholder="이메일">
                                    <div class="email_font" id="email_check"></div>
                                </div>
                            </div>
                            <div class="main-imformation-smscheck">
                                <input type="checkbox" name="check-sms" id="check-sms"><label for="check-sms">정보/이벤트 SMS 수신에 동의합니다.</label>
                            </div>
                            <div class="main-imformation-phone">
                                <input type="tel" id="member_phone" name="member_phone" placeholder="휴대폰번호 - 없이 입력하세요">
                                <div class="phone_font" id="phone_check"></div>
                            </div>
                            <div class="main-imformation-gender">
                                <div class="main-gender-title">
                                    <h3>성별</h3>
                                </div>
                                <div class="main-gender-checkbox">
                                    <input type="radio" name="member_gender" id="member_man" value="M"><label for="check-man">남자</label>
                                    <input type="radio" name="member_gender" id="member_woman" vlaue="F"><label for="check-woman">여자</label>
                                </div>
                            </div>
  							<div class="main-imformation-birth">
  								 <div class="main-birth-title">
                                    <h3>생년월일</h3>
                                </div>
                                    <input type="text" id="member_birth" name="member_birth" placeholder="ex) 940415">
                                    <div class="birth_font" id="birth_check"></div>
                            </div>
                            <div class="main-imformation-recommender">
                                <div class="recommender-title">
                                    <p>추천인 아이디</p>
                                </div>
                                <div class="recommender-input">
                                    <input type="text" id="member_recommender" name="member_recommender" placeholder="추천인 입력">
                                </div>
                            </div>
                    </form>
                </div>
                <div class="main-button">
                    <button id="btn_signup_join">회원가입</button>
                </div>
                <div class="main-explanation">
                    <p>
                        본인은 이용약관,개인정보 수집 및 이용,<br>
                        약관을 확인하였으며, 동의합니다.
                    </p>
                </div>
            </div>
        </section>
	
			<jsp:include page="/WEB-INF/views/common/footer.jsp"/>
			
	    </div>
	</body>
</html>

<script src="resources/js/login/signup_input.js" type="text/javascript"></script>
<script src="resources/js/common/common.js" type="text/javascript"></script>
<script src="resources/js/common/header3.js" type="text/javascript"></script>
<script src="resources/js/common/footer.js" type="text/javascript"></script>
