<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
<title>Insert title here</title>
<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="resources/css/month/month.css" />
    <link rel="stylesheet" type="text/css" href="resources/css/login_header/main_header.css" />
</head>
<body>
	<body>
	    <div class="container">	
	        <jsp:include page="/WEB-INF/views/login_header/main_header.jsp"/>
	        	 
	        	 <section>
                <div class="main-content">
                    <div class="main-onemonth">
                        <div class="month-title">
                            <h1>월정액제</h1>
                        </div>
                        <div class="month-text">
                            <p>
                                월 50,000원으로 취향에 맞는 원두가 정기적으로 집으로 배송되는 서비스입니다.<br>
                                주마다 500g의 색다른 원두를 즐기실 수 있습니다. 매번 귀찮게 구매 하지 않아도 되는 편리함과 따로 구매 시 보다 훨씬 저렴한 가격으로 구매하실 수 있습니다.
                            </p>
                        </div>
                        <div class="main-button">
                            <button id="btn_month_subscribe">구독하기</button>
                        </div>
                    </div>
                </div>
            </section>
	        	 	
			<jsp:include page="/WEB-INF/views/common/footer.jsp"/>
	    </div>
	</body>
</body>
</html>

<script src="resources/js/common/common.js" type="text/javascript"></script>
<script src="resources/js/month/month.js" type="text/javascript"></script>