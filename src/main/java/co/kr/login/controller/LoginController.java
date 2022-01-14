package co.kr.login.controller;

import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import co.kr.login.service.LoginService;

/**
 * Handles requests for the application home page.
 */
@Controller
public class LoginController {
	
	@Autowired
	LoginService LoginService;
	
	@RequestMapping(value="/logincheck.do", method=RequestMethod.POST)
	@ResponseBody
    public List<HashMap<String, Object>> CheckMemberId(HttpSession session, HttpServletRequest req) {
	  //사용자ID 중복체크 
		//login_id login_pw
		
      String strUserId = req.getParameter("login_id");
      String strUserPw = req.getParameter("login_pw");
      
      HashMap<String, Object> hashMap = new HashMap<String, Object>();
      hashMap.put("member_id", strUserId);
      hashMap.put("member_pw", strUserPw);
      
      List<HashMap<String, Object>> hashMapResult = LoginService.checkMemberIdAndPw(hashMap);
      
      //session
      int iResult = Integer.parseInt(hashMapResult.get(0).get("login_count").toString());
      if (0 == iResult) {
    	  //실패
    	  ;
      } else {
    	  session.setAttribute("login_id", strUserId);
    	  req.setAttribute("login_id", strUserId);
      }
      //hashMapResult = LoginService.checkMemberIdAndPw(hashMap);
      
      return hashMapResult;
    }
}
