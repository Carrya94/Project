package co.kr.gifticon.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.kr.gifticon.dao.GifticonDAO;

@Service
public class GifticonServiceImpl implements IGifticonService{
	
	@Autowired
    GifticonDAO GifticonDAO;

	@Override
	public List<HashMap<String, Object>> getGifticonData(HashMap<String, Object> i_param) {

		return GifticonDAO.getGifticonData(i_param);
	}
    
}
