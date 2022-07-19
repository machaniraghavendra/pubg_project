package com.pubg.tournaments.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.pubg.tournaments.exception.TournamentAlreadyExistsException;
import com.pubg.tournaments.exception.TournamentNotFoundException;
import com.pubg.tournaments.model.Tournaments;
import com.pubg.tournaments.repo.TournamentRepository;

@Service
public class TournamentServiceImpl implements TournamentService
{

	@Autowired
	TournamentRepository tournamentRepo;
	
	@Override
	public String save(Tournaments tournaments) throws TournamentAlreadyExistsException
	{	
		try 
		{
			if(tournamentRepo.existsById(tournaments.getTournamentId()))
			{
				throw new TournamentAlreadyExistsException("The Tournament with the same id already exists.");
			}
			else
			{
				Tournaments tournament=tournamentRepo.save(tournaments);
				return "The Data Saved";
			}
		}
		catch (TournamentAlreadyExistsException e)
		{
			e.printStackTrace();
		}
		return "The Data not Saved";
	}

	@Override
	public String updateById(Tournaments tournaments) throws TournamentNotFoundException {
		try
		{
			if(!(tournamentRepo.existsById(tournaments.getTournamentId())))
			{
				throw new TournamentNotFoundException("The Tournament with  "+tournaments.getTournamentId()+" not exists.");
			}
			else
			{
				tournamentRepo.save(tournaments);
				return "Data Updated for Id "+tournaments.getTournamentId()+" is updated";
			}
		} 
		catch (TournamentNotFoundException e) {
			e.printStackTrace();
		}
		return "Data is not updated with id of "+tournaments.getTournamentId();
	}

	@Override
	public Optional<String> findById(String tournamentId) throws TournamentNotFoundException {
		Tournaments tournaments=new Tournaments();
		try 
		{
			if(!tournamentRepo.existsById(tournamentId))
			{
				throw new TournamentNotFoundException("The Tournament with  "+tournaments.getTournamentId()+" not exists.");
			}
		} 
		catch (TournamentNotFoundException e) {
			e.printStackTrace();
		}
		return tournamentRepo.findById(tournamentId)
				.map(Tournaments::toString)
				.map(Optional::of)
				.orElseThrow(()-> new TournamentNotFoundException("The Tournament with  "+tournaments.getTournamentId()+" not exists."));
	}

	@Override
	public List<Tournaments> findAll() {
		return tournamentRepo.findAll();
	}

	@Override
	public String deleteById(String id) throws TournamentNotFoundException {
		try 
		{
			if(!tournamentRepo.existsById(id))
			{
				throw new TournamentNotFoundException("The Tournament with  "+id+" not exists.");
			}
			else
			{
				tournamentRepo.deleteById(id);
				return "The tournament with id "+id+" has been deleted";
			}
		} 
		catch (TournamentNotFoundException e) {
			e.printStackTrace();
		}
		return "The Tournament with  "+id+" not exists.";
	}

	@Override
	public String deleteAll() {
		tournamentRepo.deleteAll();
		return "Tournament list has been deleted , there is no more tournaments in game now !";
	}
	
}
