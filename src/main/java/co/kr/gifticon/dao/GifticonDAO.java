package co.kr.gifticon.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class GifticonDAO {
	
	@Autowired
    private SqlSession SqlSession;
    
    public List<HashMap<String, Object>> getGifticonData(HashMap<String, Object> i_param) {
          return SqlSession.selectList("gifticonMapper.getGifticonData", i_param);
    }
}