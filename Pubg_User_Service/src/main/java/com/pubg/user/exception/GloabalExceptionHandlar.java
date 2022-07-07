package com.pubg.user.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GloabalExceptionHandlar {
	
	@ExceptionHandler(value=UserAlreadyExistsException.class)
	public ResponseEntity<String> useralreadyexistsexception(UserAlreadyExistsException e)
	{
		return new ResponseEntity<String>("The user already exists",HttpStatus.CONFLICT);
	}
	
	@ExceptionHandler(value=UserNotFoundException.class)
	public ResponseEntity<String> usernotfoundexception(UserNotFoundException e)
	{
		return new ResponseEntity<String>("User not found with username",HttpStatus.CONFLICT);
	}
}
