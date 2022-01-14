<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
	<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="resources/css/bbs/bbs.css" />
</head>
	<body>
	    <div class="container">
	    	
	        <jsp:include page="/WEB-INF/views/login_header/main_header.jsp"/>
	        
	        <div class="main_content">
	        	 <div class="main-title">
                    <div class="main-title-text1">
                        <p>회원가입</p>
                    </div>
                </div>
	        </div>
			
			<jsp:include page="/WEB-INF/views/common/footer.jsp"/>
			
	    </div>
	</body>
</html>

<script src="resources/js/bbs/bbs.js" type="text/javascript"></script>
<script src="resources/js/common/common.js" type="text/javascript"></script>
<script src="resources/js/login_header/main_header.js" type="text/javascript"></script>
<script src="resources/js/common/footer.js" type="text/javascript"></script>
