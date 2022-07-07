package com.pubg.user.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.pubg.user.entity.UserDetails;
import com.pubg.user.exception.UserAlreadyExistsException;
import com.pubg.user.exception.UserNotFoundException;
import com.pubg.user.service.UserServiceImpl;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/userservice")
public class UserController 
{
	@Autowired
	UserServiceImpl userserviceimpl;
	
	@PostMapping("/")
	public ResponseEntity<String> signin(@RequestBody UserDetails userdetails) throws UserAlreadyExistsException
	{
		String signin=userserviceimpl.save(userdetails);
		return new ResponseEntity<String>(signin,HttpStatus.OK);
	}
	
	@PutMapping("/")
	public ResponseEntity<String> update(@RequestBody UserDetails userdetails) throws UserNotFoundException 
	{
		String update =userserviceimpl.updateUserDetails(userdetails);
		return new ResponseEntity<String>(update,HttpStatus.OK);
	}
	
	@DeleteMapping("/{email}")
	public  ResponseEntity<String> deletebyemail(@PathVariable String email ) throws UserNotFoundException
	{
		String deletebyuseremail=userserviceimpl.deleteByuserEmail(email);
		return new ResponseEntity<String>(deletebyuseremail,HttpStatus.ACCEPTED);
	}
	
	@GetMapping("/")
	public ResponseEntity<List<UserDetails>> findall( )
	{
		List<UserDetails> userdetails=userserviceimpl.findall();
		return new ResponseEntity<List<UserDetails>>(userdetails,HttpStatus.OK);
	}
	
	@GetMapping("/{email}")
	public  ResponseEntity<UserDetails> findbyemail(@PathVariable String email) throws UserNotFoundException
	{
		UserDetails details=userserviceimpl.findbymail(email);
		return new ResponseEntity<UserDetails>(details,HttpStatus.OK);
	}
	
	@GetMapping("/{mail}/{password}")
	public boolean check(@PathVariable String mail  ,@PathVariable String password)
	{
			return userserviceimpl.check(mail, password);
	}
}
