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
    <link rel="stylesheet" type="text/css" href="resources/css/gifticon/gifticon.css" />
</head>
<body>
	<body>
	    <div class="container">	
	        <jsp:include page="/WEB-INF/views/common/header2.jsp"/>
	        <section class="main-content">
	        	<div class="slider-div1" id="main_slider1">	        	
	        		<div class="slider1 slider-img" id="gifticon_slider1">
	        		</div>
	        		<div class="slider2 slider-img" id="gifticon_slider2">
	        		</div>
	        		<div class="slider3 slider-img" id="gifticon_slider3">
	        		</div>
	        	</div>
	        	<div class="slider-div2" id="main_slider2">	        	
	        		<div class="slider1 slider-img" id="gifticon_slider1">
	        		</div>
	        		<div class="slider2 slider-img" id="gifticon_slider2">
	        		</div>
	        		<div class="slider3 slider-img" id="gifticon_slider3">
	        		</div>
	        	</div>
	        	<p>
                	<a class="prev1" id="gifticon_prev">&#10094;</a>
                	<a class="next1" id="gifticon_next">&#10095;</a>
            	</p>
	        </section>
			<jsp:include page="/WEB-INF/views/common/footer.jsp"/>
	    </div>
	</body>
</body>
</html>

<script src="resources/js/common/common.js" type="text/javascript"></script>
<script src="resources/js/gifticon/gifticon.js" type="text/javascript"></script>
<script src="resources/js/common/header2.js" type="text/javascript"></script>
<script src="resources/js/common/footer.js" type="text/javascript"></script>
