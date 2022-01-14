package co.kr.login.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import co.kr.login.dao.MemberDAO;

public interface IMemberService {
	
	public int insertMember(HashMap<String, Object> i_hashMapData);
	
	public List<HashMap<String, Object>> checkMemberId(HashMap<String, Object> i_hashMapData);
}
