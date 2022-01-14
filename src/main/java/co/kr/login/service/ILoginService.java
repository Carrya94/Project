package co.kr.login.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import co.kr.login.dao.MemberDAO;

public interface ILoginService {
	
	public List<HashMap<String, Object>> checkMemberIdAndPw(HashMap<String, Object> i_hashMapData);
}
