package com.players.exception;

public class PlayerNotFoundException extends Exception {
	private String message;
	public PlayerNotFoundException(String string)
	{
		message=string;
	}
}
