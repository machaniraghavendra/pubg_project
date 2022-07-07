package com.pubg.matches.service;

import java.util.List;
import com.pubg.matches.entity.Matches;
import com.pubg.matches.exception.MatchAlreadyExistsException;
import com.pubg.matches.exception.MatchNotFoundException;

public interface MatchService 
{	
	public String save(Matches matches) throws MatchAlreadyExistsException;
	public String updateById(Matches matches) throws MatchNotFoundException;
	public Matches findById(String matches) throws MatchNotFoundException;
	public List<Matches> findAll();
	public String deleteById(String id) throws  MatchNotFoundException;
	public String deleteAll();
}
