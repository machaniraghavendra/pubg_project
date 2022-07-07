package com.pubg.favourite.response;

import javax.persistence.Id;

public class Matches_list {
	
	private String matchId;
	private String matchName;
	private String matchType;
	private String playersCount;
	private String matchTime;
	
	public Matches_list(String matchId, String matchName, String matchType, String playersCount, String matchTime) {
		super();
		this.matchId = matchId;
		this.matchName = matchName;
		this.matchType = matchType;
		this.playersCount = playersCount;
		this.matchTime = matchTime;
	}
	public Matches_list() {
		super();
	}
	
	public String getMatchId() {
		return matchId;
	}
	public void setMatchId(String matchId) {
		this.matchId = matchId;
	}
	public String getMatchName() {
		return matchName;
	}
	public void setMatchName(String matchName) {
		this.matchName = matchName;
	}
	public String getMatchType() {
		return matchType;
	}
	public void setMatchType(String matchType) {
		this.matchType = matchType;
	}
	public String getPlayersCount() {
		return playersCount;
	}
	public void setPlayersCount(String playersCount) {
		this.playersCount = playersCount;
	}
	public String getMatchTime() {
		return matchTime;
	}
	public void setMatchTime(String matchTime) {
		this.matchTime = matchTime;
	}
	
}
