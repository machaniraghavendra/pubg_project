package com.pubg.favourite.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.pubg.favourite.entity.FavouriteMatches;
import com.pubg.favourite.exception.FavouriteMatchAlreadyAddedException;
import com.pubg.favourite.exception.FavouriteMatchNotAddedYetException;
import com.pubg.favourite.repo.FavouriteRepo;
import com.pubg.favourite.response.Matches_list;
import com.pubg.favourite.response.ResponseEntity;

@Service
public class FavouriteServiceImpl implements FavouriteService{

	@Autowired
	FavouriteRepo frepo;

	@Autowired
	RestTemplate restTemplate;

	@Override
	public ResponseEntity findFavouriteById(String id) throws FavouriteMatchNotAddedYetException{
		ResponseEntity responseEntity=new ResponseEntity();
		try {
			if(!frepo.existsById(id))
				throw new FavouriteMatchNotAddedYetException("Favourite match not added yet in list");
			else {
				String url="http://localhost:8082/matcheslist/";
				FavouriteMatches fmatches=frepo.findById(id).get();
				Matches_list matcheslist=restTemplate.getForObject(url+fmatches.getMatchId(),Matches_list.class);
				responseEntity.setFavouriteMatches(fmatches);
				responseEntity.setMatcheslist(matcheslist);
				return responseEntity;
			}
		}
		catch(FavouriteMatchNotAddedYetException e)
		{
			e.printStackTrace();
		}
		return responseEntity;
	}

	@Override
	public String save(FavouriteMatches fmatches) throws FavouriteMatchAlreadyAddedException
	{
		try {
			if(frepo.existsById(fmatches.getFavouriteId()))
				throw new FavouriteMatchAlreadyAddedException("The Match already added in favourite list");
			else {
				FavouriteMatches save=frepo.save(fmatches);
				return "Added to favourite list 🙂";
			}
			
		} catch (FavouriteMatchAlreadyAddedException e) {
			e.printStackTrace();
		}
		return "The Match already added in favourite list";
	}
	
	@Override
	public List<FavouriteMatches> findall()
	{
		return frepo.findAll();
	}

	@Override
	public String deleteByid(String id) throws FavouriteMatchNotAddedYetException {
		try {
			if(!frepo.existsById(id))
				throw new FavouriteMatchNotAddedYetException("Match not found in favourites list");
			else {
				frepo.deleteById(id);
				return "Removed from favourite list ☹️";
			}
		} catch (FavouriteMatchNotAddedYetException e) {
			e.printStackTrace();
		}
		return "Match not found in favourites list";
	}

	@Override
	public String deleteAll() {
		frepo.deleteAll();
		return "Deleted succesfully ! Now there are no matches in favourites list";
	}

}
