package com.pubg.tournaments.exception;

public class TournamentNotFoundException extends Exception {

	private String message;
	public TournamentNotFoundException (String string)
	{
		this.message=string;
	}
}
