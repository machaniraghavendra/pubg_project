package com.players.exception;

public class PlayerAlreadyExistsException extends Exception {
	private String message;
	public PlayerAlreadyExistsException(String string)
	{
		message=string;
	}
}
