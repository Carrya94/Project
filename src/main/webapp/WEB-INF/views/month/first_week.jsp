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
    <link rel="stylesheet" type="text/css" href="resources/css/month/first_week.css" />
    <link rel="stylesheet" type="text/css" href="resources/css/month/second_week.css" />
    <link rel="stylesheet" type="text/css" href="resources/css/month/third_week.css" />
    <link rel="stylesheet" type="text/css" href="resources/css/month/four_week.css" />
    <link rel="stylesheet" type="text/css" href="resources/css/login_header/main_header.css" />
</head>
<body>
	<body>
	    <div class="container" id="container">	
	        <jsp:include page="/WEB-INF/views/login_header/main_header.jsp"/>
	        	 
	        	   <section>
                <div class="main-content">
                    <div class="main-firstweek">
                       <div class="firstweek-title" id="div_firstweek_title" style="display: none;">
                            <h1 id="txt_firstweek_title">First week</h1>
                       </div>
                       <div class="twoweek-title" id="div_twoweek_title" style="display: none;">
                            <h1 id="txt_twoweek_title">Second week</h1>
                       </div>
                        <div class="thirdweek-title" id="div_thirdweek_title" style="display: none;">
                            <h1 id="txt_thirdweek_title">Third week</h1>
                       </div>
                       <div class="fourweek-title" id="div_fourweek_title" style="display: none;">
                            <h1 id="txt_fourweek_title">4th week</h1>
                       </div>
                       <div class="firstweek-input">
                            <ul>
                                <li>
                                    <h1>원두</h1>
                                </li>
                                <li>
                                    <select name="bean" id="bean1" style="display:none;">
                                        <optgroup>
                                            <option value="select">=원두를 선택해주세요=</option>
                                            <option value="spacial">Special</option>
                                            <option value="ethiopia">에티오피아</option>
                                            <option value="guatemala">과테말라</option>
                                            <option value="maker">메이커</option>
                                        </optgroup>
                                    </select>

                                    <select name="bean" id="bean2" style="display:none;">
                                        <optgroup>
                                            <option value="select">=원두를 선택해주세요=</option>
                                            <option value="spacial">Special</option>
                                            <option value="ethiopia">에티오피아</option>
                                            <option value="guatemala">과테말라</option>
                                            <option value="maker">메이커</option>
                                        </optgroup>
                                    </select>

                                    <select name="bean" id="bean3" style="display:none;">
                                        <optgroup>
                                            <option value="select">=원두를 선택해주세요=</option>
                                            <option value="spacial">Special</option>
                                            <option value="ethiopia">에티오피아</option>
                                            <option value="guatemala">과테말라</option>
                                            <option value="maker">메이커</option>
                                        </optgroup>
                                    </select>

                                    <select name="bean" id="bean4" style="display:none;">
                                        <optgroup>
                                            <option value="select">=원두를 선택해주세요=</option>
                                            <option value="spacial">Special</option>
                                            <option value="ethiopia">에티오피아</option>
                                            <option value="guatemala">과테말라</option>
                                            <option value="maker">메이커</option>
                                        </optgroup>
                                    </select>

                                    
                                </li>
                                <li>
                                    <h1>분쇄도</h1>
                                </li>
                                <li>
                                    <select name="grind" id="grind1" style="display:none;">
                                        <optgroup>
                                            <option value="select">=분쇄도를 선택해주세요=</option>
                                            <option value="holbean">홀빈(갈지않음)</option>
                                            <option value="handdrip">핸드드립</option>
                                            <option value="frenchpress">프렌치프레스</option>
                                            <option value="mokapot">모카포트</option>
                                            <option value="aeropress">에어로프레스</option>
                                            <option value="Espressomachine">에스프레소머신</option>
                                            <option value="coldbrew">콜드브루</option>
                                        </optgroup>
                                    </select>

                                    <select name="grind" id="grind2" style="display:none;">
                                        <optgroup>
                                            <option value="select">=분쇄도를 선택해주세요=</option>
                                            <option value="holbean">홀빈(갈지않음)</option>
                                            <option value="handdrip">핸드드립</option>
                                            <option value="frenchpress">프렌치프레스</option>
                                            <option value="mokapot">모카포트</option>
                                            <option value="aeropress">에어로프레스</option>
                                            <option value="Espressomachine">에스프레소머신</option>
                                            <option value="coldbrew">콜드브루</option>
                                        </optgroup>
                                    </select>

                                    <select name="grind" id="grind3" style="display:none;">
                                        <optgroup>
                                            <option value="select">=분쇄도를 선택해주세요=</option>
                                            <option value="holbean">홀빈(갈지않음)</option>
                                            <option value="handdrip">핸드드립</option>
                                            <option value="frenchpress">프렌치프레스</option>
                                            <option value="mokapot">모카포트</option>
                                            <option value="aeropress">에어로프레스</option>
                                            <option value="Espressomachine">에스프레소머신</option>
                                            <option value="coldbrew">콜드브루</option>
                                        </optgroup>
                                    </select>

                                    <select name="grind" id="grind4" style="display:none;">
                                        <optgroup>
                                            <option value="select">=분쇄도를 선택해주세요=</option>
                                            <option value="holbean">홀빈(갈지않음)</option>
                                            <option value="handdrip">핸드드립</option>
                                            <option value="frenchpress">프렌치프레스</option>
                                            <option value="mokapot">모카포트</option>
                                            <option value="aeropress">에어로프레스</option>
                                            <option value="Espressomachine">에스프레소머신</option>
                                            <option value="coldbrew">콜드브루</option>
                                        </optgroup>
                                    </select>
                                </li>
                                <li>
                                    <button id="btn_first_prev" style="display: none;">이전단계</button>
                                    <button id="btn_first_next" style="display: none;">다음단계</button>
                                </li>
                            </ul>
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
<script src="resources/js/month/first_week.js" type="text/javascript"></script>