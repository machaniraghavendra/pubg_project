package com.pubg.user.service;

import java.util.List;

import com.pubg.user.entity.UserDetails;
import com.pubg.user.exception.UserAlreadyExistsException;
import com.pubg.user.exception.UserNotFoundException;

public interface UserService 
{	
	public String save(UserDetails userdetails) throws UserAlreadyExistsException;
	public String updateUserDetails(UserDetails userdetails) throws UserNotFoundException;
	public String deleteByuserEmail(String username) throws UserNotFoundException;
	public List<UserDetails> findall();
	public UserDetails findbymail(String mail) throws UserNotFoundException; 
	public boolean check(String userEmail,String password);
}
