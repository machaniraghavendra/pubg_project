package com.pubg.tournaments.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class TournamentExceptionHandler 
{
	@ExceptionHandler(value=TournamentAlreadyExistsException.class)
	public ResponseEntity<String> tournamentalreadyexists(TournamentAlreadyExistsException e)
	{
		return new ResponseEntity<String>("Tournament already exists ",HttpStatus.OK);
	}
	
	@ExceptionHandler(value=TournamentNotFoundException.class)
	public ResponseEntity<String> tournamentnotfound(TournamentNotFoundException e)
	{
		return new ResponseEntity<String>("Tournament not found exception",HttpStatus.OK);
	}
}
