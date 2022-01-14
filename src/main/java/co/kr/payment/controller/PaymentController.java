package co.kr.payment.controller;

import java.util.Locale;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class PaymentController {

	
	@RequestMapping(value = "/payment.do", method = RequestMethod.GET)
	public ModelAndView PaymemtPage(Locale locale, Model model) {

		ModelAndView modelAndView = new ModelAndView();
		
		modelAndView.setViewName("payment/payment");
		
		return modelAndView;
	}
}
