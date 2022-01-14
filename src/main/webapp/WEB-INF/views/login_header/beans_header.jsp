<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
	<title>Beans</title>
	<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="resources/css/common/header.css" />
</head>
	<body>
		<header class="header">
	        <div class="header-content">
	            <!-- 온클릭! -->
	            <div id="div_headerLogo" class="header-logo">
	                <!-- 로고이미지 -->
	                <img src="resources/images/bean_logo.png" alt="">
	            </div>
	            <div class="header-content2">
	                <div class="header-search">
	                    <div class="header-mypage">
                            <div class="mypage" id="btn_start_mypage" >
                                <p>마이페이지</p>
                            </div>
                            <div class="basket" id="btn_start_basket">
                                <p>장바구니</p>
                            </div>
                        </div>
	                    <!-- 인풋에 돋보기 추가 -->
	                    <input type="text" name="search" placeholder="통합검색">
	                </div>
	                <nav class="nav">
	                    <ul>
	                        <li id="btn_start_beans">원두</li>
	                        <li id="btn_start_month">원두 월정액제</li>
	                        <li id="btn_start_gifticon">기프티콘</li>
	                        <li id="btn_start_BBS">공지사항</li>
	                    </ul>
	                </nav>
	            </div>
	        </div>
	        <nav class="nav2">
	            <ul>
	                <li id="li_bean_Sale">이달의 원두</li>
	                <li id="li_bean_Special">Special</li>
	                <li id="li_bean_Ethiopia">에티오피아</li>
	                <li id="li_bean_Guatemala">과테말라</li>
	                <li id="li_bean_Maker">메이커 원두</li>
	            </ul>
	        </nav>
	    </header> 
	</body>
</html>

<script src="resources/js/login_header/beans_header.js" type="text/javascript"></script>

