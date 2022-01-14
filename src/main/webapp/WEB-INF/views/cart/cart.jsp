<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<link rel="stylesheet" type="text/css" href="resources/css/cart/cart.css" />
</head>
<body>
	<div class="container">
		<jsp:include page="/WEB-INF/views/login_header/main_header.jsp"/>
		
		 <section>
            <div class="main-content">
                <div class="main-basket">
                    <div class="basket-title">
                        <h1>장바구니</h1>
                    </div>
                    <div class="basket-table" id="basket_table">
                        <table>
                            <thead>
                                <tr>
                                    <th class="th0">
                                        <input type="checkbox" name="all_check" id="all_check">
                                    </th>
                                    <th class="th1">
                                        이미지
                                    </th>
                                    <th class="th2">
                                        상품정보
                                    </th>
                                    <th class="th3">
                                        판매가
                                    </th>
                                    <th class="th4">
                                        수량
                                    </th>
                                    <th>
                                        적립금
                                    </th>
                                    <th>
                                        배송구분
                                    </th>
                                    <th>
                                        배송비
                                    </th>
                                    <th>
                                        합계
                                    </th>     
                                    <th>
                                        선택
                                    </th>             
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th class="th0">
                                        <input type="checkbox" name="select_check" id="select_check">
                                    </th>
                                    <th class="th1">
                                        이미지aaaaaaaaaaaaaaaaa <br>
                                        aaaaaaaa <br>
                                        aaaaaaaaaaaa
                                    </th>
                                    <th class="th2">
                                        페루 리마 디카페인
                                    </th>
                                    <th class="th3">
                                        10000원
                                    </th>
                                    <th class="th4">
                                        10000원
                                    </th>
                                    <th>
                                        960원
                                    </th>
                                    <th>
                                        개별배송
                                    </th>
                                    <th>
                                        2000원
                                    </th>
                                    <th>
                                        12000원
                                    </th>     
                                    <th>
                                        
                                    </th>             
                                </tr>
                            </tbody>
                        </table>
                        <div class="table-price" id="table_price">
                            <h2>상품 구매금액 : 상품값 + 배송비 : 배송값 = 합계 : 얼마</h2>
                        </div>
                    </div>
                    <div class="cart-button" id="cart_delete_print">
                        <div class="cart-button-delete">
                            <button id="cart_delete">장바구니 비우기</button>
                        </div>
                        <div class="cart-button-print">
                            <button id="cart_print">견적서 출력</button>
                        </div>
                    </div>
                    <div class="payment-price" id="payment_price">
                        <div class="payment-goods-price">
                            <div class="goods-price-title">
                                <h2>총 상품 금액</h2>
                            </div>
                            <div class="goods-price-data">
                                <h1>9000원</h1>
                            </div>
                        </div>
                        <div class="payment-delivery-price">
                            <div class="delivery-price-title">
                                <h2>총 배송비</h2>
                            </div>
                            <div class="delivery-price-data">
                                <h1>+ 9000원</h1>
                            </div>
                        </div>
                        <div class="payment-sum-price">
                            <div class="sum-price-title">
                                <h2>총 상품 금액</h2>
                            </div>
                            <div class="sum-price-data">
                                <h1>= 18000원</h1>
                            </div>
                        </div>
                    </div>
                    <div class="payment-price-button" id="payment_price_button">
                        <div class="btn_allgoods_order">
                            <button id="btn_allgoods_order">전체상품주문</button>
                        </div>
                        <div class="btn_selectgoods_order">
                            <button id="btn_selectgoods_order">선택상품주문</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <jsp:include page="/WEB-INF/views/common/footer.jsp"/>
	</div>
</body>
</html>
