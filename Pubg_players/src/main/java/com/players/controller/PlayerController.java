package com.players.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.players.entity.Players;
import com.players.exception.PlayerAlreadyExistsException;
import com.players.exception.PlayerNotFoundException;
import com.players.service.PlayerServiceImpl;
@CrossOrigin(origins ="*")
@RestController
@RequestMapping("/playerslist")
public class PlayerController 
{
	@Autowired
	PlayerServiceImpl  playerServ;
	
	@PostMapping("/")					//working
	public ResponseEntity<String> save(@RequestBody Players player) throws PlayerAlreadyExistsException
	{
		String playersave=playerServ.save(player);
		return new ResponseEntity<String>(playersave,HttpStatus.CREATED);
	}
	
	@GetMapping("/{playerId}")					//working
	public ResponseEntity<Players> findbyid(@PathVariable Integer playerId) throws PlayerNotFoundException
	{
		Players findbyid=playerServ.findbyId(playerId);
		return new ResponseEntity<Players>(findbyid,HttpStatus.FOUND);
	}
	
	@GetMapping("/")										//working
	public ResponseEntity<List<Players>> view()
	{
		List<Players> players=playerServ.findall();
		return new ResponseEntity<List<Players>>(players,HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")						//working	
	public ResponseEntity<String> deletebyid(@PathVariable Integer id) throws PlayerNotFoundException
	{
		String deletebyid=playerServ.deleteById(id);
		return new ResponseEntity<String>(deletebyid,HttpStatus.ACCEPTED);
	}
	
	@DeleteMapping("/")						//working
	public ResponseEntity<String> deleteall()
	{
		String deleteall=playerServ.deleteallPlayers();
		return new ResponseEntity<String>(deleteall,HttpStatus.MOVED_PERMANENTLY);
	}
}


