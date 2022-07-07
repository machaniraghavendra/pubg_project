package com.players.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.players.entity.Players;
import com.players.exception.PlayerAlreadyExistsException;
import com.players.exception.PlayerNotFoundException;
import com.players.repo.PlayersRepository;

@Service
public class PlayerServiceImpl implements PlayerService{

	@Autowired
	PlayersRepository playersRepository;

	@Override
	public String save(Players player) throws PlayerAlreadyExistsException {
		try {
			if(playersRepository.existsById(player.getId()))
				throw new PlayerAlreadyExistsException("Player already exists");
			else {
				Players playerSave=playersRepository.save(player);
				return "Player with id "+player.getId()+" has been saved!";
			}
		} catch (PlayerAlreadyExistsException e) {
			e.printStackTrace();
		}
		return "Player with id "+player.getId()+" is not saved.";
	}

	@Override
	public Players findbyId(Integer id) throws PlayerNotFoundException {
		try {
			if(!playersRepository.existsById(id))
				throw new PlayerNotFoundException("Player not found with "+id);
			else {
				return playersRepository.findById(id).get();
			}
		} catch (PlayerNotFoundException e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public List<Players> findall() {
		return playersRepository.findAll();
	}

	@Override
	public String deleteById(Integer id) throws PlayerNotFoundException {
		Players player=new Players();
		try {
			if(!playersRepository.existsById(id))
				throw new PlayerNotFoundException("Player not found with "+id);
			else {
				playersRepository.deleteById(id);
				return "Player with id "+id+" has been deleted!";
			}
		} catch (PlayerNotFoundException e) {
			e.printStackTrace();
		}
		return "Player not found with "+id;
	}

	@Override
	public String deleteallPlayers() {
		playersRepository.deleteAll();
		return "All players are deleted";
	}
}









