package co.kr.beans.controller;

import java.text.DateFormat;
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

import co.kr.beans.service.IBeanService;


@Controller
public class BeanController {
	
	@Autowired
    IBeanService IBeanService;
	
	private static final Logger logger = LoggerFactory.getLogger(BeanController.class);
	
	
	@RequestMapping(value = "/beans.do", method = RequestMethod.GET)
	public ModelAndView beansPage(Locale locale, Model model) {
		logger.info("BeanController!", locale);
		
		Date date = new Date();
		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);
		
		String formattedDate = dateFormat.format(date);
		
		model.addAttribute("serverTime", formattedDate );
		
		ModelAndView modelAndView = new ModelAndView();
		
		modelAndView.setViewName("bean/beans");
		
		return modelAndView;
		
		//return "bean/beans";
	}
	
	//beansDATA GET
	@RequestMapping(value="/getbeans.json", method=RequestMethod.POST)
    @ResponseBody
    public List<HashMap<String, Object>> Getbeans(HttpServletRequest req) {
		
	  //value 바로 뽑을수가없어... 이게 즉무슨말이냐 우리가보낸건 key // value <<<<< ?? 
      String strBeanKey = req.getParameter("beans_key");
      System.out.println("strBeanKey : " + strBeanKey);
      HashMap<String, Object> param = new HashMap<String, Object>();
      param.put("bean_id", strBeanKey);
      
      List<HashMap<String, Object>> mapReturnData = IBeanService.getBeansData(param);
      
      return mapReturnData;
    }
	
	@RequestMapping(value = "/login_beans.do", method = RequestMethod.GET)
	public ModelAndView LoginBeans(Locale locale, Model model) {

		ModelAndView modelAndView = new ModelAndView();
		
		modelAndView.setViewName("login_after/beans");
		
		return modelAndView;
	}
}
