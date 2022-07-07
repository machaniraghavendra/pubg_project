package com.pubg.tournaments.exception;

public class TournamentAlreadyExistsException extends Exception 
{
	private String message;
	public TournamentAlreadyExistsException (String string)
	{
		this.message=string;
	}
}
