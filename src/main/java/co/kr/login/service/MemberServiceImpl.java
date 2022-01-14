package co.kr.login.service;

import java.util.HashMap;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.kr.login.dao.MemberDAO;

@Service
public class MemberServiceImpl implements IMemberService{
	
	@Autowired
	MemberDAO MemberDAO;
	
	@Override
	public int insertMember(HashMap<String, Object> i_hashMapData) {
	
		int iResultInfo = MemberDAO.setMemberInfo(i_hashMapData);
		System.out.println("INSERT RESULT : " + iResultInfo);

		return iResultInfo;
	}
	
	@Override
	public List<HashMap<String, Object>> checkMemberId(HashMap<String, Object> i_hashMapData) {
		return MemberDAO.checkMemberId(i_hashMapData);
	}
}
	
	
	
