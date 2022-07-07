package com.pubg.matches.exception;

public class MatchNotFoundException extends Exception {
	private String message;

	public MatchNotFoundException(String string) {
		this.message=string;
	}
}
