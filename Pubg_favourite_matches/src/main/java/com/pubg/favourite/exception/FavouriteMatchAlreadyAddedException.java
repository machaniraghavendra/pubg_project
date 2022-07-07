package com.pubg.favourite.exception;

public class FavouriteMatchAlreadyAddedException extends Exception {
	private String message;
	public FavouriteMatchAlreadyAddedException(String string) {
		message=string;
	}
}