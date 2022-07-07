package com.pubg.recommendation.exception;

public class ThePlayerAlreadyExistsInRecommendation extends Exception {
	private String string;
	public ThePlayerAlreadyExistsInRecommendation (String string)
	{
		 this.string=string;
	}
}
