package co.kr.month.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.kr.month.dao.MonthDAO;

@Service
public class MonthServiceImpl implements IMonthService {

	@Autowired
	MonthDAO MonthDAO;  
	
	@Override
	public int insertMonthList(HashMap<String, Object> i_hashMapData) {
		int iResultInfo = MonthDAO.setMonthInfo(i_hashMapData);
		
		return iResultInfo;
	}
	
	 @Override
	 public List<HashMap<String, Object>> getMonthData(HashMap<String, Object> i_param){
	          return MonthDAO.getMonthData(i_param);
	 }
	 
	

}
