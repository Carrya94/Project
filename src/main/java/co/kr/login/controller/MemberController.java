package co.kr.login.controller;

import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import co.kr.login.service.MemberServiceImpl;

@Controller
public class MemberController {
	
	@Autowired
	MemberServiceImpl service;
	
	@RequestMapping(value = "/login.do", method = RequestMethod.GET)
	public String loginPage() {
		return "login/login";
	}
	
	@RequestMapping(value="/signup.do", method = RequestMethod.GET)
	public String signupPage() {
		return "login/signup";
	}
	
	@RequestMapping(value="/signup_agree.do", method = RequestMethod.GET)
	public String signup_agreePage() {
		return "login/signup_agree";
	}
	
	@RequestMapping(value="/signup_input.do", method = RequestMethod.GET)
	public String signup_input() {
		return "login/signup_input";
	}
	
	@RequestMapping(value="/signup_success.do", method = RequestMethod.GET)
	public String signup_success() {
		return "login/signup_success";
	}
	
	@RequestMapping(value="/hashMapTest.json", method=RequestMethod.POST)
	@ResponseBody
    public int insertMemberHashMap(HttpServletRequest req) {
		
      String strUserId = req.getParameter("user_id");
      String strUserPw = req.getParameter("user_pw");
      String strUserName = req.getParameter("user_name");
      String strUserAddr = req.getParameter("user_addr");
      String strUserEmail = req.getParameter("user_email");
      String strUserPhone = req.getParameter("user_phone");
      String strUserGender = req.getParameter("user_gender");
      String strUserBirth = req.getParameter("user_birth");
      String strUserRecommender = req.getParameter("user_recommender");
      
      HashMap<String, Object> param = new HashMap<String, Object>();
      param.put("user_id", strUserId);
      param.put("user_pw", strUserPw);
      param.put("user_name", strUserName);
      param.put("user_addr", strUserAddr);
      param.put("user_phone", strUserPhone);      
      param.put("user_email", strUserEmail);
      param.put("user_gender", strUserGender);
      param.put("user_birth", strUserBirth);
      param.put("user_recommender", strUserRecommender);
      
      int iResult = service.insertMember(param);
      
      return iResult;
    }
	
	@RequestMapping(value="/useridcheck.json", method=RequestMethod.POST)
	@ResponseBody
    public List<HashMap<String, Object>> CheckMemberId(HttpServletRequest req) {
	  //사용자ID 중복체크
      String strUserId = req.getParameter("member_id");
      
      HashMap<String, Object> hashMap = new HashMap<String, Object>();
      hashMap.put("member_id", strUserId);
      
      return service.checkMemberId(hashMap);
    }
}
