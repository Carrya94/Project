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
    <link rel="stylesheet" type="text/css" href="resources/css/month/month_info.css" />
</head>
<body>
	<body>
	    <div class="container">	
	        <jsp:include page="/WEB-INF/views/login_header/main_header.jsp"/>
	        	 
	        <section>
                <div class="main-content">
                    <div class="month-info">
                        <div class="first-week" id="first_week">
                            <!-- <div class="first-week-title">
                                <h1>First week</h1>
                            </div>
                            <div class="first-week-bean">
                                <div class="first-week-bean-title">
                                    <h2>원두</h2>
                                </div>
                                <div class="first-week-bean-info">
                                    
                                </div>
                            </div>
                            <div class="first-week-grind">
                                <div class="first-week-grind-title">
                                    <h2>분쇄도</h2>
                                </div>
                                <div class="first-week-grind-info">
                                    
                                </div>
                            </div> -->
                        </div>
                        <div class="second-week" id="second_week">
                            <div class="second-week-title">
                                <h1>Second week</h1>
                            </div>
                            <div class="second-week-bean">
                                <div class="second-week-bean-title">
                                    <h2>원두</h2>
                                </div>
                                <div class="second-week-bean-info">
                                    
                                </div>
                            </div>
                            <div class="second-week-grind">
                                <div class="second-week-grind-title">
                                    <h2>분쇄도</h2>
                                </div>
                                <div class="second-week-grind-info">
                                    
                                </div>
                            </div>
                        </div>
                        <div class="third-week" id="third_week">
                            <div class="third-week-title">
                                <h1>Third week</h1>
                            </div>
                            <div class="third-week-bean">
                                <div class="third-week-bean-title">
                                    <h2>원두</h2>
                                </div>
                                <div class="third-week-bean-info">
                                    
                                </div>
                            </div>
                            <div class="third-week-grind">
                                <div class="third-week-grind-title">
                                    <h2>분쇄도</h2>
                                </div>
                                <div class="third-week-grind-info">
                                    
                                </div>
                            </div>
                        </div>
                        <div class="four-week" id="four_week">
                            <div class="four-week-title">
                                <h1>4th week</h1>
                            </div>
                            <div class="four-week-bean">
                                <div class="four-week-bean-title">
                                    <h2>원두</h2>
                                </div>
                                <div class="four-week-bean-info">
                                    
                                </div>
                            </div>
                            <div class="four-week-grind">
                                <div class="first-week-grind-title">
                                    <h2>분쇄도</h2>
                                </div>
                                <div class="four-week-grind-info">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="btn-next-prev">
                        <button id="btn_monthinfo_prev">이전단계</button>
                        <button id="btn_monthinfo_next">결제하기</button>
                    </div>
                </div>
            </section>
	        	 	
			<jsp:include page="/WEB-INF/views/common/footer.jsp"/>
	    </div>
	</body>
</body>
</html>

<script src="resources/js/common/common.js" type="text/javascript"></script>
<script src="resources/js/month/month_info.js" type="text/javascript"></script>