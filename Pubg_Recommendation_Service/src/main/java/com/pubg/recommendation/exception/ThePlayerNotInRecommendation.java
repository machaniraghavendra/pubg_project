package com.pubg.recommendation.exception;

public class ThePlayerNotInRecommendation extends Exception {
	private String string;
	public ThePlayerNotInRecommendation  (String string) {
		this.string=string;
	}

}
