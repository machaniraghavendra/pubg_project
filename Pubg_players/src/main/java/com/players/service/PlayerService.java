package com.players.service;

import java.util.List;
import com.players.entity.Players;
import com.players.exception.PlayerAlreadyExistsException;
import com.players.exception.PlayerNotFoundException;

public  interface PlayerService {
	
	public String save(Players player) throws PlayerAlreadyExistsException;
	public Players findbyId(Integer id) throws PlayerNotFoundException;
	public List<Players> findall();
	public String deleteById(Integer id) throws PlayerNotFoundException;
	public String deleteallPlayers();
}