package com.demos.auction.itemdao;

import java.io.Console;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import com.demos.auction.itemmodel.Item;

@Component
public class ItemDao {

	@Autowired
	private MongoTemplate mongoTemplate;
	
	public Item saveItem(Item item) {
		mongoTemplate.save(item);
		return item;
	}
	
	public List<Item> getAllItems() {
		return mongoTemplate.findAll(Item.class);
	}

	public Item getItemById(String itemId) {
		Query query = new Query();
		query.addCriteria(Criteria.where("itemId").is(itemId));
		return mongoTemplate.findOne(query, Item.class);
	}

	public String deleteItem(String itemId) {
		Query query = new Query();
		query.addCriteria(Criteria.where("itemId").is(itemId));
		mongoTemplate.remove(query, Item.class);
		return "Item deleted";
	}
	
	public List<Item> getItemByStatus(boolean status) {
		Query query = new Query();
		query.addCriteria(Criteria.where("status").is(status));
		List<Item> items=mongoTemplate.find(query,Item.class);
		System.out.println(items);
		return items;
	}
	
	public List<Item> getItemByName(String itemName) {
		Query query = new Query();
		query.addCriteria(Criteria.where("itemName").is(itemName));
		List<Item> items=mongoTemplate.find(query,Item.class);
		System.out.println(items);
		return items;
	}
	
	
	
	
	
}
