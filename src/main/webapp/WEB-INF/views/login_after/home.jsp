<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
	<title>Beans</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="resources/css/home/home.css" />
</head>
<body>
	<div class="container">
		<jsp:include page="/WEB-INF/views/login_header/main_header.jsp"/>
		
		<section>
            <article class="main-video">
                <!-- 메인 첫번째 화면 이미지로할지 비디오로할지 고민중 -->
                <div class="slider">
                    <img src="" alt="">
                </div>
            </article>
            <article class="main-salebean">
                <!-- 검은색 배경 -->
                <div class="art1-banner">
                    <h1>Bean Recommendation of the Month</h1>
                </div>
                <div class="art1-sale">
                    <div class="art1-slider1" id="beans_slider1">
                        <div class="art1-sale-img1 slider1">
                        </div>
                        <div class="art1-sale-img2 slider1">
                        </div>
                        <div class="art1-sale-img3 slider1">
                        </div>
                    </div>
                    <div class="art1-slider2" id="beans_slider2">
                        <div class="art1-sale-img4 slider1">
                        </div>
                        <div class="art1-sale-img5 slider1">
                        </div>
                        <div class="art1-sale-img6 slider1">
                        </div>
                    </div>
                    <div class="art1-slider3" id="beans_slider3">
                        <div class="art1-sale-img7 slider1">
                        </div>
                        <div class="art1-sale-img8 slider1">
                        </div>
                        <div class="art1-sale-img9 slider1">
                        </div>
                    
                    </div>
                    <p>
                        <a class="prev1" id="beans_prev">&#10094;</a>
                        <a class="next1" id="beans_next">&#10095;</a>
                    </p>
                </div>
            </article>
            <article class="main-art2">
                <div class="art2-banner">
                    <!-- 검은색 배경 ar1-banner 하고 사이즈 똑같게 -->
                    <h1>Personal cafe Gifticon</h1>
                </div>
                <div class="art2-gifticon">
                    <div class="gifticon-slider1" id="gifticon_slider1">
                        <div class="art2-gifticon-img1 slider2">
                        </div>
                        <div class="art2-gifticon-img2 slider2">
                        </div>
                        <div class="art2-gifticon-img3 slider2">  
                        </div>
                    </div>
                    <div class="gifticon-slider2" id="gifticon_slider2">
                        <div class="art2-gifticon-img4 slider2">
                        </div>
                        <div class="art2-gifticon-img5 slider2">
                        </div>
                        <div class="art2-gifticon-img6 slider2"> 
                        </div>
                    </div>
                    <div class="gifticon-slider3" id="gifticon_slider3">
                        <div class="art2-gifticon-img7 slider2"> 
                        </div>
                        <div class="art2-gifticon-img8 slider2"> 
                        </div>
                        <div class="art2-gifticon-img9 slider2"> 
                        </div>
                    </div>
                    <p>
                        <a class="prev2">&#10094;</a>
                        <a class="next2">&#10095;</a>
                    </p>
                    </div>
                </div>
            </article>
            <article class="main-art3">
                <!-- 백그라운드 이미지 있음 -->
                <div class="art3-month">
                    <div class="art3-banner">
                        <!-- 흰색글씨 크게 -->
                        <h1>RelexBean의 월정액제 서비스</h1>
                        <h3>
                            일상의 작은 사치를<br>
                            RelexBean과 함께
                        </h3>
                    </div>
                    <div class="art3-div">
                        <!-- 바로구매 흰색배경 검은색글씨, 장바구니 검은배경 흰글씨 -->
                        <div class="art3-buy">
                            <button id="btn-buy">바로구매</button>
                        </div>
                        <div class="art3-cart">
                            <button id="btn-cart">장바구니</button>
                        </div>
                    </div>
                </div>
            </article>
        </section>
        
		<jsp:include page="/WEB-INF/views/common/footer.jsp"/>
	</div>
	
</body>
</html>

<script src="resources/js/common/common.js" type="text/javascript"></script>
<script src="resources/js/common/footer.js" type="text/javascript"></script>
<script src="resources/js/login_after/home.js" type="text/javascript"></script>
