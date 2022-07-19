package com.pubg.tournaments.service;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import com.pubg.tournaments.exception.TournamentAlreadyExistsException;
import com.pubg.tournaments.exception.TournamentNotFoundException;
import com.pubg.tournaments.model.Tournaments;

public interface TournamentService 
{
	public String save(Tournaments tournaments) throws TournamentAlreadyExistsException;
	public String updateById(Tournaments tournaments) throws TournamentNotFoundException;
	public Optional<String> findById(String tournamentId) throws TournamentNotFoundException;
	public List<Tournaments> findAll();
	public String deleteById(String id )throws TournamentNotFoundException;
	public String deleteAll();
}
