package co.kr.login.dao;

import java.util.HashMap;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class MemberDAO {
	
	@Autowired
	private SqlSessionTemplate SqlSessionTemplate;
    
    //HashMap Insert 로직
    public int setMemberInfo(HashMap<String, Object> i_hashMapData) {
    	int iResultInfo = SqlSessionTemplate.insert("MemberMapper.insertMemberHashMap", i_hashMapData);
		System.out.println("INSERT RESULT : " + iResultInfo);
    	
    	return iResultInfo;
    }
    
    
    public List<HashMap<String, Object>> checkMemberId(HashMap<String, Object> i_hashMapData) {
    	return SqlSessionTemplate.selectList("MemberMapper.MemberIdCheck", i_hashMapData);
    }
}
