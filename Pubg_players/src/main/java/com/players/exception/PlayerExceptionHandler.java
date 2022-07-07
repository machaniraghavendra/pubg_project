package com.players.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.*;
@ControllerAdvice
public class PlayerExceptionHandler {
	
	@ExceptionHandler(value=PlayerAlreadyExistsException.class)
	public ResponseEntity<String> PlayerAlreadyExistsException(PlayerAlreadyExistsException playerAlreadyExistsException)
	{
		return new ResponseEntity<String>("Player Already Exists",HttpStatus.ACCEPTED);
	}

	@ExceptionHandler(value=PlayerNotFoundException.class)
	public ResponseEntity<String> PlayerNotFoundException (PlayerNotFoundException playerNotFoundException)
	{
		return new ResponseEntity<String>("Player not found ",HttpStatus.CONFLICT);
	}
}
