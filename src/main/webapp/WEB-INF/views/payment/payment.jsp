<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="resources/css/payment/payment.css" />
</head>
<body>
	<div class="container">
	
		<jsp:include page="/WEB-INF/views/login_header/main_header.jsp"/>
		
		<section>
            <div class="main-content">
                <div class="pay-input">
                    <div class="pay-input-option">
                            <ul>
                                <li>
                                    <div class="input-option-title">
                                        <p>상품이름</p>
                                    </div>
                                </li>
                                <li>
                                    <h1>용량</h1>
                                </li>
                                <li>
                                    <select name="volume" id="volume">
                                        <optgroup>
                                            <option value="select">=용량을 선택해주세요=</option>
                                            <option value="200g">200g</option>
                                            <option value="500g">500g</option>
                                        </optgroup>
                                    </select>
                                </li>
                                <li>
                                    <h1>분쇄도</h1>
                                </li>
                                <li><select name="grind" id="grind">
                                        <optgroup>
                                            <option value="select">=분쇄도를 선택해주세요=</option>
                                            <option value="홀빈">홀빈(갈지않음)</option>
                                            <option value="핸드드립">핸드드립</option>
                                            <option value="프렌치프레스">프렌치프레스</option>
                                            <option value="모카포트">모카포트</option>
                                            <option value="에어로프레스">에어로프레스</option>
                                            <option value="에스프레소머신">에스프레소머신</option>
                                            <option value="콜드브루">콜드브루</option>
                                        </optgroup>
                                    </select>
                                </li>
                                <li>
                                    <div class="pay-price" id="pay-price">
                                        <h1>가격</h1>
                                    </div>
                                </li>
                                <li>
                                    <div class="pay-input-button">
                                        <div class="prev-button">
                                            <button id="prev">결제</button>
                                        </div>
                                        <div class="next-button">
                                            <button id="next">장바구니</button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                    </div>
                </div>
                <div class="pay-img">
                    <img src="images/Bean-month.png" alt="">
                </div>
            </div>
            <div class="main-content2">
                <div class="goods-info">
                    <div class="delivery-guid">
                        <div class="delivery-guid-title">
                            <h3>배송안내</h3>
                        </div>
                        <div class="delivery-guid-icon">
                            <p>></p>
                        </div>
                        <div class="delivery-guid-contents">
                            <ul>
                                <li>
                                    <p>배송비는 2,500원이며, 25,000원 이상 구매시 무료로 배송됩니다. (일부 도서산간지역은 추가 배송비가 발생할 수 있습니다.)</p>
                                </li>
                                <li>
                                    <p>평일 기준 오전 10시 이전 주문은 당일 출고되며, 이후 주문은 익일에 출고됩니다. </p>
                                </li>
                                <li>
                                    <p>상품은 출고 후 주말을 제외하고 1~3일 이내에 받아보실 수 있습니다. 단, 택배사 상황에 따라 지연될 수 있습니다. </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="exchange-refund">
                        <div class="exchange-refund-title">
                            <h2>교환/환불 안내</h2>
                        </div>
                        <div class="exchange-refund-icon">
                            <p>></p>
                        </div>
                        <div class="exchange-refund-contents">
                            <ul>
                                <li>개봉 전이라면 고객 변심에 의한 상품(식품 외)의 교환/환불이 가능하지만, 배송비를 부담하셔야 합니다. </li>
                                <li>원두와 커피는 식품의 특성 상, 제품의 하자와 오류를 제외하고 교환/환불이 불가능한 점 양해 부탁드립니다. </li>
                                <li>기타 문의사항은 전화로 연락 바랍니다. (02-6204-7888, 평일 오전 10시-오후 7시) </li>
                            </ul>
                        </div>
                    </div>
                    <div class="notice-board">
                        <div class="notice-board-content">
                            <!--  -->
                        </div>
                        <div class="review">
                            <p>등록된 상품후기가 없습니다.</p>
                        </div>
                    </div>
                </div>
            </div>가입
        </section>
        
        <jsp:include page="/WEB-INF/views/common/footer.jsp"/>
        
	</div>
</body>
</html>
<script src="resources/js/common/common.js" type="text/javascript"></script>
<script src="resources/js/common/footer.js" type="text/javascript"></script>
<script src="resources/js/cart/cart.js" type="text/javascript"></script>