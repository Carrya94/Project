<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
	<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="resources/css/login_header/mypage_header.css" />
</head>
<body>
	 <header class="header">
        <div class="header-content">
            <div class="header-logo">
                <!-- 로고이미지 -->
                <img src="images/logo.png" alt="">
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
                <li id="btn_mypage_mypage">마이페이지</li>
                <li id="btn_mypage_coupon">쿠폰/적립금</li>
                <li id="btn_mypage_order">주문/배송조회</li>
                <li id="btn_mypage_question">문의내역</li>
                <li id="btn_mypage_change">회원정보수정</li>
            </ul>
        </nav>
    </header>
</body>
</html>