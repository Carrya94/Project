package co.kr.month.controller;

import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import co.kr.month.service.IMonthService;
import co.kr.month.service.MonthServiceImpl;

@Controller
public class MonthController {
	
	@Autowired
	MonthServiceImpl MonthServiceImpl;
	
	@RequestMapping(value = "/months.do", method = RequestMethod.GET)
	public ModelAndView monthsPage() {
		
		ModelAndView modelAndView = new ModelAndView();
		
		modelAndView.setViewName("login/login");
		
		return modelAndView;
	}
	
	@RequestMapping(value = "/month.do", method = RequestMethod.GET)
	public ModelAndView monthPage() {
		
		ModelAndView modelAndView = new ModelAndView();
		
		modelAndView.setViewName("month/months");
		
		return modelAndView;
	}
	
	@RequestMapping(value = "/first_week.do", method = RequestMethod.GET)
	public ModelAndView firstWeekPage() {
		ModelAndView modelAndView = new ModelAndView();
		
		modelAndView.setViewName("month/first_week");
		
		return modelAndView;
	}

	
	@RequestMapping(value = "/month_input.json", method = RequestMethod.POST)
	@ResponseBody
	public int insertMonthList(HttpSession session, HttpServletRequest req) {
		String strFirstBean = req.getParameter("ddl_first_bean");
	    String strFirstGrind = req.getParameter("ddl_first_grind");
	    String strSecondBean = req.getParameter("ddl_second_bean");
	    String strSecondGrind = req.getParameter("ddl_second_grind");
	    String strThirdBean = req.getParameter("ddl_third_bean");
	    String strThirdGrind = req.getParameter("ddl_third_grind");
	    String strFourBean = req.getParameter("ddl_four_bean");
	    String strFourGrind = req.getParameter("ddl_four_grind");
	    
	    //Session에 저장된ID
	    String strSessionUserId = (String) session.getAttribute("login_id");
	    
	    HashMap<String, Object> param = new HashMap<String, Object>();
	    
	    param.put("first_week_bean", strFirstBean);
	    param.put("first_week_grind", strFirstGrind);
	    param.put("second_week_bean", strSecondBean);
	    param.put("second_week_grind", strSecondGrind);
	    param.put("third_week_bean", strThirdBean);
	    param.put("third_week_grind", strThirdGrind);
	    param.put("four_week_bean", strFourBean);
	    param.put("four_week_grind", strFourGrind);
	    param.put("member_id", strSessionUserId);
	    
	    int iResult = MonthServiceImpl.insertMonthList(param);
	    
	    return iResult;
	}
	
	@RequestMapping(value = "/month_info.do", method = RequestMethod.GET)
	public ModelAndView monthInfoPage() {
		ModelAndView modelAndView = new ModelAndView();
		
		modelAndView.setViewName("month/month_info");
		
		return modelAndView;
	}
	
	@RequestMapping(value = "/getmonth.json", method=RequestMethod.POST)
	@ResponseBody
	public List<HashMap<String, Object>> GetMonth(HttpSession session, HttpServletRequest req) {

	    String strMonthKey = req.getParameter("month_key");
	    System.out.println("strMonthKey : " + strMonthKey);
	    HashMap<String, Object> param = new HashMap<String, Object>();
	    
	    String strUserId = session.getAttribute("login_id").toString();
	    param.put("member_id", strUserId);
	      
	    List<HashMap<String, Object>> mapReturnData = MonthServiceImpl.getMonthData(param);
	      
	    return mapReturnData;
	}
}
