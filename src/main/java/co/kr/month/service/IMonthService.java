package co.kr.month.service;

import java.util.HashMap;
import java.util.List;

public interface IMonthService {

	public int insertMonthList(HashMap<String, Object> i_hashMapData);	
	
	public List<HashMap<String, Object>> getMonthData(HashMap<String, Object> i_param);
}
