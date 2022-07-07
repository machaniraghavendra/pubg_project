package com.pubg.tournaments.control;

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
import com.pubg.tournaments.exception.TournamentAlreadyExistsException;
import com.pubg.tournaments.exception.TournamentNotFoundException;
import com.pubg.tournaments.model.Tournaments;
import com.pubg.tournaments.service.TournamentServiceImpl;

@CrossOrigin(origins ="http://localhost:3000/",allowedHeaders = "*")
@RestController
@RequestMapping("/tournamentlist")
public class TournamentsController 
{
	@Autowired
	TournamentServiceImpl tournamentser;
	
	@PostMapping("/")				//working
	public ResponseEntity<String> save(@RequestBody  Tournaments tournaments) throws TournamentAlreadyExistsException
	{
		String tournament=tournamentser.save(tournaments);
		return new ResponseEntity<String>(tournament,HttpStatus.CREATED);
	}
	
	@PutMapping("/")			//working
	public ResponseEntity<String> updateById(@RequestBody Tournaments tournaments) throws TournamentNotFoundException 
	{
		String tournamentupdate=tournamentser.updateById(tournaments);
		return new ResponseEntity<String>(tournamentupdate,HttpStatus.CREATED);
	}
	
	@CrossOrigin(origins ="*",allowedHeaders = "*")
	@GetMapping("/id/{id}")		//working
	public ResponseEntity<Tournaments> findbyid(@PathVariable String id) throws TournamentNotFoundException
	{
		Tournaments tournamentfindbyid=tournamentser.findById(id);
		return new ResponseEntity<Tournaments>(tournamentfindbyid,HttpStatus.OK);
	}
	
	@GetMapping("/")			//working
	public ResponseEntity<List<Tournaments>> view()
	{
		List<Tournaments> view=tournamentser.findAll();
		return new ResponseEntity<List<Tournaments>>(view,HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")			//working
	public ResponseEntity<String> deleteByid(@PathVariable String id) throws TournamentNotFoundException
	{
		String deletebyid=tournamentser.deleteById(id);
		return new ResponseEntity<String>(deletebyid,HttpStatus.ACCEPTED);
	}
	
	@DeleteMapping("/pubg/tournament/deleteall")			//working
	public ResponseEntity<String> deleteall()
	{
		String delete=tournamentser.deleteAll();
		return new ResponseEntity<String>(delete,HttpStatus.MOVED_PERMANENTLY);
	}
}