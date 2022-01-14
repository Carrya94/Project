<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
	<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="resources/css/beans/beans.css" />
</head>
	<body>
	    <div class="container">
	    	
	        <jsp:include page="/WEB-INF/views/common/header.jsp"/>
	        
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
			
	    </div>
	</body>
</html>

<script src="resources/js/beans/beans.js" type="text/javascript"></script>
<script src="resources/js/common/common.js" type="text/javascript"></script>
<script src="resources/js/common/footer.js" type="text/javascript"></script>
