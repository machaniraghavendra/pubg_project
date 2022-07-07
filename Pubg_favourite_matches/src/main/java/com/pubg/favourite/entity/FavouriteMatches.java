package com.pubg.favourite.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class FavouriteMatches 
{
	@Id
	private String favouriteId;
	private String matchId;
	private String matchName;
	private String matchType;
	private String playersCount;
	private String matchTime;
	
	public FavouriteMatches() {
		super();
	}

	public FavouriteMatches(String favouriteId, String matchId, String matchName, String matchType, String playersCount,
			String matchTime) {
		super();
		this.favouriteId = favouriteId;
		this.matchId = matchId;
		this.matchName = matchName;
		this.matchType = matchType;
		this.playersCount = playersCount;
		this.matchTime = matchTime;
	}

	public String getFavouriteId() {
		return favouriteId;
	}

	public void setFavouriteId(String favouriteId) {
		this.favouriteId = favouriteId;
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
