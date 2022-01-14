package co.kr.gifticon.controller;

import java.text.DateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import co.kr.gifticon.service.IGifticonService;


@Controller
public class GifticonController {
	@Autowired
	IGifticonService IGifticonService;
  
	@RequestMapping(value = "/gifticon.do", method = RequestMethod.GET)
	public ModelAndView gifticonPage(Locale locale, Model model) {

		ModelAndView modelAndView = new ModelAndView();
		
		modelAndView.setViewName("gifticon/gifticon");
		
		return modelAndView;
	}
	
	//gifticonDATA GET
	@RequestMapping(value="/getgifticon.json", method=RequestMethod.POST)
    @ResponseBody
    public List<HashMap<String, Object>> Getgifticon(HttpServletRequest req) {
      
      String strGifticonKey = req.getParameter("gifticon_key");
      System.out.println("strGifticonKey : " + strGifticonKey);
      HashMap<String, Object> param = new HashMap<String, Object>();
      param.put("gifticon_id", strGifticonKey);
      
      List<HashMap<String, Object>> mapReturnData = IGifticonService.getGifticonData(param);
      
      return mapReturnData;
    }
	
	@RequestMapping(value = "/login_gifticon.do", method = RequestMethod.GET)
	public ModelAndView LoginGifticon(Locale locale, Model model) {

		ModelAndView modelAndView = new ModelAndView();
		
		modelAndView.setViewName("login_after/gifticon");
		
		return modelAndView;
	}
}
