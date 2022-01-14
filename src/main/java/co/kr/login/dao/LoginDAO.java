package co.kr.login.dao;

import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class LoginDAO {
	
	@Autowired
	private SqlSessionTemplate SqlSessionTemplate;
	
	public List<HashMap<String, Object>> checkMemberIdAndPw (HashMap<String, Object> i_hashMap) {
		
		return SqlSessionTemplate.selectList("MemberMapper.LoginCheck", i_hashMap);
		
	}
}
