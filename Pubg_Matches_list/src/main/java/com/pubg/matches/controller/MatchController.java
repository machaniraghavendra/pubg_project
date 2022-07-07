package com.pubg.matches.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.pubg.matches.entity.Matches;
import com.pubg.matches.exception.MatchAlreadyExistsException;
import com.pubg.matches.exception.MatchNotFoundException;
import com.pubg.matches.service.MatchServiceImpl;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/matcheslist")
public class MatchController 
{
	@Autowired
	MatchServiceImpl  matchServ;
	
	@PostMapping("/")					//working
	public ResponseEntity<String> save(@RequestBody Matches matches) throws MatchAlreadyExistsException
	{
		String matchsave=matchServ.save(matches);
		return new ResponseEntity<String>(matchsave,HttpStatus.OK);
	}
	
	@PutMapping("/")				//working
	public ResponseEntity<String> update(@RequestBody Matches matches) throws MatchNotFoundException
	{
		String matchupdate=matchServ.updateById(matches);
		return new ResponseEntity<String>(matchupdate,HttpStatus.ACCEPTED);
	}
	
	@GetMapping("/{matchId}")			//working
	public ResponseEntity<Matches> findbyid(@PathVariable String matchId) throws MatchNotFoundException
	{
		Matches findbyid=matchServ.findById(matchId);
		return new ResponseEntity<Matches>(findbyid,HttpStatus.OK);
	}
	
	@GetMapping("/")													//Working
	public ResponseEntity<List<Matches>> view()
	{
		List<Matches> matches=matchServ.findAll();
		return new ResponseEntity<List<Matches>>(matches,HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")							//working
	public ResponseEntity<String> deletebyid(@PathVariable String id) throws MatchNotFoundException
	{
		String deletebyid=matchServ.deleteById(id);
		return new ResponseEntity<String>(deletebyid,HttpStatus.ACCEPTED);
	}
	
	@DeleteMapping("/")					//working
	public ResponseEntity<String> deleteall()
	{
		String deleteall=matchServ.deleteAll();
		return new ResponseEntity<String>(deleteall,HttpStatus.OK);
	}

	
}
