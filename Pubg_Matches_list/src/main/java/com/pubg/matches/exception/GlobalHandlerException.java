package com.pubg.matches.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalHandlerException 
{
	@ExceptionHandler(value=MatchAlreadyExistsException.class)
	public ResponseEntity<String> matchAlreadyExistsException (MatchAlreadyExistsException e)
	{
		return new  ResponseEntity<String> ("The Match already Exists",HttpStatus.CONFLICT);
	}
	
	@ExceptionHandler(value=MatchNotFoundException.class)
	public ResponseEntity<String> matchNotFoundException (MatchNotFoundException e)
	{
		return new ResponseEntity<String> ("The Match not found",HttpStatus.CONFLICT);
	}
}
