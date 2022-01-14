package co.kr.loginafter.home.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class LoginAfterContoller {
	
//	@RequestMapping(value = "/login_after_home.json", method = RequestMethod.POST)
//	@ResponseBody
//	public List<HashMap<String, Object>> CheckMemberId(HttpServletRequest req) {
//		  //사용자ID 중복체크 
//			//login_id login_pw
//			
//	      String strUserId = req.getParameter("login_id");
//	      String strUserPw = req.getParameter("login_pw");
//	      
//	      HashMap<String, Object> hashMap = new HashMap<String, Object>();
//	      hashMap.put("member_id", strUserId);
//	      hashMap.put("member_pw", strUserPw);
//	      
//	      return LoginService.checkMemberIdAndPw(hashMap);
//    }
//	
	
	
	@RequestMapping(value = "/login_after_home.do", method = RequestMethod.GET)
	public ModelAndView LoginAfterHome(Locale locale, Model model) {

		ModelAndView modelAndView = new ModelAndView();
		
		modelAndView.setViewName("login_after/home");
		
		return modelAndView;
	}
}
