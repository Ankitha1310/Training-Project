package com.demos.auction.userservice;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demos.auction.userdao.UserDao;
import com.demos.auction.usermodel.User;

@Service
public class UserService {

	@Autowired
	UserDao userDao;
	
	public String saveUser(User user) {
		try {
			userDao.saveUser(user);
			return "Success";
			}
			catch (Exception e) {
			return  "Error "+e;
			}
	}
	
	public List<User> getUsers() {
		try {
			return userDao.getUsers();
			}
			catch (Exception e) {
			return  null;
			}
	}
	
	public Object getUser(String userId) {
		try {
			return userDao.getUser(userId);
			}
			catch (Exception e) {
			return e;
			}
	}
	
	public String deleteUser(String userId) {
		try {
			return userDao.deleteUser(userId);
			}
			catch (Exception e) {
			return  "Error "+e;
			}
	}
	
	public String forgotPassword(String userId, String key) {
		try {
			return userDao.forgotPassword(userId, key);
			}
			catch (Exception e) {
			return  "Error "+e;
			}
	}
	
	
}
