package co.kr.login.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.kr.login.dao.LoginDAO;

@Service
public class LoginService implements ILoginService {

	@Autowired
	LoginDAO LoginDAO;
	
	@Override
	public List<HashMap<String, Object>> checkMemberIdAndPw(HashMap<String, Object> i_hashMapData) {
		return LoginDAO.checkMemberIdAndPw(i_hashMapData);
	}
}
