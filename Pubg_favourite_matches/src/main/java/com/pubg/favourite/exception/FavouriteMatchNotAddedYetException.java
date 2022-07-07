package com.pubg.favourite.exception;

public class FavouriteMatchNotAddedYetException extends Exception {
	private String message;
	public FavouriteMatchNotAddedYetException(String string) {
		message=string;
	}
}