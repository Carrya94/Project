package co.kr.beans.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.kr.beans.dao.BeanDAO;

@Service
public class BeanServiceImpl implements IBeanService{
	
	@Autowired
    BeanDAO BeanDAO;
    
    @Override
    public List<HashMap<String, Object>> getBeansData(HashMap<String, Object> i_param){
          return BeanDAO.getBeansData(i_param);
    }
}
