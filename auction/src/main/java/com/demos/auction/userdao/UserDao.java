package com.demos.auction.userdao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import com.demos.auction.usermodel.User;

@Component
public class UserDao {
	
	@Autowired
	private MongoTemplate mongoTemplate;

	
	public User saveUser(User user)
	{
		mongoTemplate.save(user);
		return user;
	}
	
	public List<User> getUsers()
	{
		return mongoTemplate.findAll(User.class);

	}
	
	
	public User getUser(String userId)
	{
		Query query = new Query();
		query.addCriteria(Criteria.where("userId").is(userId));
		return mongoTemplate.findOne(query, User.class);
	}
		
	public  String deleteUser(String userId)
	{
		Query query = new Query();
		query.addCriteria(Criteria.where("userId").is(userId));
		mongoTemplate.remove(query, User.class);
		return "User Deleted";
	}

	
}
