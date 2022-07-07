package com.pubg.favourite.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pubg.favourite.entity.FavouriteMatches;
import com.pubg.favourite.exception.FavouriteMatchAlreadyAddedException;
import com.pubg.favourite.exception.FavouriteMatchNotAddedYetException;
import com.pubg.favourite.response.ResponseEntity;
import com.pubg.favourite.service.FavouriteServiceImpl;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/favouritematches")
public class FavouritesController {

	@Autowired
	FavouriteServiceImpl fservice;
	
	@PostMapping("/")									//working
	public String save(@RequestBody FavouriteMatches fmatches) throws FavouriteMatchAlreadyAddedException{
		return fservice.save(fmatches);
	}
	
	@GetMapping("/{id}")					//working
	public ResponseEntity findbyid(@PathVariable String id) throws FavouriteMatchNotAddedYetException
	{
		return fservice.findFavouriteById(id);
	}
	
	@GetMapping("/")							//working
	public List<FavouriteMatches> findall()
	{
		return fservice.findall();
	}
	
	@DeleteMapping("/{id}")					//working
	public String deletebyid(@PathVariable String id) throws FavouriteMatchNotAddedYetException
	{
		return fservice.deleteByid(id);
	}
	
	@DeleteMapping("/")							//working
	public String delete()
	{
		return fservice.deleteAll();
	}
}
