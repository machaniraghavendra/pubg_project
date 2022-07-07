package com.pubg.matches.exception;

public class MatchAlreadyExistsException extends Exception 
{
	private String message;

	public MatchAlreadyExistsException(String string) {
		this.message=string;
	}
}
