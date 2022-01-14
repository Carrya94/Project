package co.kr.beans.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class BeanDAO {
	
	@Autowired
    private SqlSession SqlSession;
    
    public List<HashMap<String, Object>> getBeansData(HashMap<String, Object> i_param) {
          return SqlSession.selectList("beansMapper.getBeansData", i_param);
    }
}