package com.pubg.favourite.service;

import java.util.List;

import com.pubg.favourite.entity.FavouriteMatches;
import com.pubg.favourite.exception.FavouriteMatchAlreadyAddedException;
import com.pubg.favourite.exception.FavouriteMatchNotAddedYetException;
import com.pubg.favourite.response.ResponseEntity;

public interface FavouriteService 
{
	public ResponseEntity findFavouriteById(String id) throws FavouriteMatchNotAddedYetException;
	public String save(FavouriteMatches fmatches) throws FavouriteMatchAlreadyAddedException;
	public List<FavouriteMatches> findall();
	public String deleteByid(String id) throws FavouriteMatchNotAddedYetException;
	public String deleteAll();
}
