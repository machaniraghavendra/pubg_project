package com.pubg.user.exception;

public class UserAlreadyExistsException extends Exception {
	private String message;
	public UserAlreadyExistsException(String string) {
		this.message=string;
	}

}
