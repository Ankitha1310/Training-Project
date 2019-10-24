package com.demos.auction.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demos.auction.itemdao.ItemDao;
import com.demos.auction.itemmodel.Item;
import com.demos.auction.usermodel.User;
import com.demos.auction.userservice.UserService;

@CrossOrigin
@RestController
public class AuctionCtrl {


	@Autowired
	UserService userService;
	@Autowired
	ItemDao itemService;
	
	
	@PostMapping(value="user")
	public String saveUser(@RequestBody User user)
	{

		return userService.saveUser(user);
	}
	
	@GetMapping(value="user")
	public List<User> getAllUser()
	{
		return userService.getUsers(); 
		
	}
	
	@GetMapping(value="user/{userId}")
	public Object getUser(@PathVariable String userId )
	{
		return userService.getUser(userId); 
		
	}
	
	
	@DeleteMapping(value="user/{userId}")
	public String deleteUser(@PathVariable String userId )
	{
		return userService.deleteUser(userId);
		
	}
	
	@PutMapping(value="user")
	public String updateUser(@RequestBody User user )
	{
		return userService.saveUser(user); 

	}
	
	/* ---------------------
	 * ITEM CONTROLLER PART 
	 * ---------------------*/
	
	
	
	@PostMapping(value="item")
	public Item saveItem(@RequestBody Item item)
	{

		return itemService.saveItem(item);
	}
	
	@GetMapping(value="item")
	public List<Item> getAllItems()
	{
		return itemService.getAllItems(); 
		
	}
	
	@GetMapping(value="item/{itemId}")
	public Object getItem(@PathVariable String itemId )
	{
		return itemService.getItemById(itemId);
		
	}
	
	@DeleteMapping(value="item/{itemId}")
	public String deleteItem(@PathVariable String itemId )
	{
		return itemService.deleteItem(itemId);
		
	} 
	
	@PutMapping(value="item")
	public Item updateItem(@RequestBody Item item)
	{
		return itemService.saveItem(item);

	}
	
	@GetMapping(value="item1/{status}")
	public List<Item> getItemByStatus(@PathVariable boolean status)
	{
		return itemService.getItemByStatus(status);
		
	}
	
	@GetMapping(value="item2/{itemName}")
	public List<Item> getItemByName(@PathVariable String itemName)
	{
		return itemService.getItemByName(itemName);
		
	}
	
	
}
