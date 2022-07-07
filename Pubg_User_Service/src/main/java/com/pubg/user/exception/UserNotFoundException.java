package com.pubg.user.exception;

public class UserNotFoundException extends Exception {
	private String message;
	public UserNotFoundException(String string) {
		this.message=string;
	}
}
