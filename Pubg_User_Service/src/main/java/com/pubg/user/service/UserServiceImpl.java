package com.pubg.user.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.oauth2.resource.OAuth2ResourceServerProperties.Jwt;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.pubg.user.entity.UserDetails;
import com.pubg.user.exception.UserAlreadyExistsException;
import com.pubg.user.exception.UserNotFoundException;
import com.pubg.user.repo.UserRepo;


@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepo userrepo;

	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Override
	public String save(UserDetails userdetails) throws UserAlreadyExistsException {
		try {
			if(userrepo.existsByuserEmail(userdetails.getUserEmail()))
			{
				throw new UserAlreadyExistsException("The User already exists");
			}
			else {
				if(userdetails.getPassword()==null)
				{
					return "Password required";
				}else {
					userdetails.setPassword(passwordEncoder.encode(userdetails.getPassword()).replace('/',','));
					
					userrepo.save(userdetails);
					return "Signed successfully ! 🙂";
				}
			}
		} catch (UserAlreadyExistsException e) {
			e.printStackTrace();
		}
		return "User already exists with the same email";
	}

	@Override
	public String updateUserDetails(UserDetails userdetails) throws UserNotFoundException {
		try {
			if(!(userrepo.existsByuserEmail(userdetails.getUserEmail())))
				throw new UserNotFoundException("User not found with email");
			else {
				if(userdetails.getPassword()==""  )
				{
					return "The password not to be null!";
				}
				if(userdetails.getMobileNumber()=="")
				{
					return "The mobile number not to be null!";
				}
				if(!userdetails.getMobileNumber() .matches("^[0-9]+$"))
				{
					return "The mobile number must be digits";
				}
				if(userdetails.getMobileNumber().length()>10||userdetails.getMobileNumber().length()<10)
				{
					return "Enter valid mobile number";
				}
				if(userdetails.getUserName()=="")
				{
					return "The user name not to be null!";
				}
				if(userdetails.getPassword().length()<4)
				{
					return "The password must be greater than 4 characters!";
				}
//				if(userdetails.getPassword().length()>10)
//				{
//					return "The password must be less than 10 characters!";
//				}
				else {
					userdetails.setPassword(passwordEncoder.encode(userdetails.getPassword()).replace('/',','));
					userrepo.save(userdetails);
					return "Updated successfully 🙂";
				}
			}
		} catch (UserNotFoundException e) {
			e.printStackTrace();
		}
		return "User not found with the email";
	}

	@Override
	public String deleteByuserEmail(String useremail) throws UserNotFoundException {
		try {
			if(!userrepo.existsByuserEmail(useremail))
				throw new UserNotFoundException("User not found with email");
			else {
				userrepo.deleteById(useremail);
				return "User deleted with email "+useremail;
			}
		} catch (UserNotFoundException e) {
			e.printStackTrace();
		}
		return "User not deleted or User not found with email";
	}

	@Override
	public List<UserDetails> findall()
	{
		return userrepo.findAll();
	}

	@Override
	public UserDetails findbymail(String mail) throws UserNotFoundException {
		UserDetails details=new UserDetails();
		if(!userrepo.existsById(mail)) {
			throw new UserNotFoundException("User not found with email "+mail);
		}
		else {
			return userrepo.findById(mail).get();
		}
	}

	@Override
	public boolean check(String userEmail, String password) {
		UserDetails user=new UserDetails();
		if(userrepo.existsById(userEmail))
		{
			user=userrepo.findById(userEmail).get();
			if(passwordEncoder.matches(password, user.getPassword().replace(',','/')))
			{
				return true;
			}
		}
		return false;
	}
	public boolean checkpass(String password,String encodepass)
	{
		UserDetails user =new UserDetails();
		if(passwordEncoder.matches(password,encodepass.replace(',', '/'))||password.equals(encodepass))
		{
			return true;
		}
		else
		{
			return false;
		}
	}
}
