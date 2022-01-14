package co.kr.month.dao;

import java.util.HashMap;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class MonthDAO {

	@Autowired
	private SqlSessionTemplate SqlSessionTemplate;
    
    public int setMonthInfo(HashMap<String, Object> i_hashMapData) {
    	int iResultInfo = SqlSessionTemplate.insert("MonthMapper.insertMonthHashMap", i_hashMapData);
    	
    	return iResultInfo;
    }
    
    public List<HashMap<String, Object>> getMonthData(HashMap<String, Object> i_param) {
        return SqlSessionTemplate.selectList("MonthMapper.selectMonthHashMap", i_param);
    }
    

}
