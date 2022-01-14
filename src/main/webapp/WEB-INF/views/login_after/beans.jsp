<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="resources/css/beans/beans.css" />
</head>
<body>
	<jsp:include page="/WEB-INF/views/login_header/beans_header.jsp"/>
	
	<section class="main-content">
				<div id="main_slider"></div>

				

	        	<div class="slider-div1" id="main_slider1">	        	
	        		<div class="slider1 slider-img1" id="beans_slider1">
	        		</div>
	        		<div class="slider2 slider-img1" id="beans_slider2">
	        		</div>
	        		<div class="slider3 slider-img1" id="beans_slider3">
	        		</div>
	        	</div>
	        	<div class="slider-div2" id="main_slider2">	        	
	        		<div class="slider4 slider-img1" id="beans_slider4">
	        		</div>
	        		<div class="slider5 slider-img1" id="beans_slider5">
	        		</div>
	        		<div class="slider6 slider-img1" id="beans_slider6">
	        		</div>
	        	</div>
	        	<p>
                	<a class="prev1" id="beans_prev">&#10094;</a>
                	<a class="next1" id="beans_next">&#10095;</a>
            	</p>
	        </section>
	        
	        <jsp:include page="/WEB-INF/views/common/footer.jsp"/>
	        
	        
	        
</body>
</html>
<script src="resources/js/beans/login_beans.js" type="text/javascript"></script>
<script src="resources/js/common/common.js" type="text/javascript"></script>
<script src="resources/js/common/footer.js" type="text/javascript"></script>