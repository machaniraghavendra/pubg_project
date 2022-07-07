package com.pubg.matches.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.pubg.matches.entity.Matches;
import com.pubg.matches.exception.MatchAlreadyExistsException;
import com.pubg.matches.exception.MatchNotFoundException;
import com.pubg.matches.repo.MatchsRepository;

@Service
public class MatchServiceImpl implements MatchService{

	@Autowired
	MatchsRepository matchsRepository;
	
	@Override
	public String save(Matches matches) throws MatchAlreadyExistsException {
		try {
			if(matchsRepository.existsById(matches.getMatchId()))
				throw new MatchAlreadyExistsException("The match already exists");
			else
			{
				Matches save=matchsRepository.save(matches);
				return "New Match Added into API";
			}
		} catch (MatchAlreadyExistsException e) {
			e.printStackTrace();
		}
		return "Match not added";
	}

	@Override
	public String updateById(Matches matches) throws MatchNotFoundException {
		try {
			if(!matchsRepository.existsById(matches.getMatchId()))
				throw new MatchNotFoundException("The match with id"+matches.getMatchId()+" not found");
			else {
				Matches save=matchsRepository.save(matches);
				return "Match data got updated of id "+matches.getMatchId();
			}
		} catch (MatchNotFoundException e) {
			e.printStackTrace();
		}
		return "The match id not found in API";
	}

	@Override
	public Matches findById(String matches) throws MatchNotFoundException 
	{
		Matches match=new Matches();
		try {
			if(!(matchsRepository.existsById(matches)))
				throw new MatchNotFoundException("The match with id "+match.getMatchId()+" not found");
			else {
				return matchsRepository.findById(matches).get();
			}
		} catch (MatchNotFoundException e) {
			e.printStackTrace();
		}
		return match;
	}

	@Override
	public List<Matches> findAll() {
		return matchsRepository.findAll();
	}

	@Override
	public String deleteById(String id) throws MatchNotFoundException {
		try {
			if(!matchsRepository.existsById(id))
				throw new MatchNotFoundException("The match with id "+id+" not found");
			else {
				matchsRepository.deleteById(id);
				return "The Match with id "+id+" has been deleted";
			}
		} catch (MatchNotFoundException e) {
		e.printStackTrace();
		}
		return "The match with id "+id+" not found";
	}

	@Override
	public String deleteAll() {
		 matchsRepository.deleteAll();
		 return "The total matches got deleted in Match API";
	}
}
