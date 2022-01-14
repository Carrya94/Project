package co.kr.cart.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Locale;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;



@Controller
public class CartController {

	
	
	@RequestMapping(value = "/basket.do", method = RequestMethod.GET)
	public ModelAndView CartPage(Locale locale, Model model) {

		ModelAndView modelAndView = new ModelAndView();
		
		modelAndView.setViewName("cart/cart");
		
		return modelAndView;
	}
	
//	@RequestMapping(value = "/getcart.json", method = RequestMethod.POST)
//	@ResponseBody
//	public List<HashMap<String, Object>> GetCart(HttpSession session, HttpServletRequest req) {
//
//	    String strCartKey = req.getParameter("cart_key");
//	    System.out.println("strCartKey : " + strCartKey);
//	    HashMap<String, Object> param = new HashMap<String, Object>();
//	    
//	    String strUserId = session.getAttribute("login_id").toString();
//	    param.put("member_id", strUserId);
//	      
//	    List<HashMap<String, Object>> mapReturnData = CartServiceImpl.getCartData(param);
//	      
//	    return mapReturnData;
//	}
}
