package com.pubg.favourite.response;

import com.pubg.favourite.entity.FavouriteMatches;

public class ResponseEntity 
{
	private FavouriteMatches favouriteMatches;
	private Matches_list matcheslist;

	public FavouriteMatches getFavouriteMatches() {
		return favouriteMatches;
	}
	public void setFavouriteMatches(FavouriteMatches favouriteMatches) {
		this.favouriteMatches = favouriteMatches;
	}
	public Matches_list getMatcheslist() {
		return matcheslist;
	}
	public void setMatcheslist(Matches_list matcheslist) {
		this.matcheslist = matcheslist;
	}
	public ResponseEntity(FavouriteMatches favouriteMatches, Matches_list matcheslist) {
		super();
		this.favouriteMatches = favouriteMatches;
		this.matcheslist = matcheslist;
	}
	public ResponseEntity() {
		super();
	}
	
}
