package com.pubg.tournaments.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pubg.tournaments.model.Tournaments;

@Repository
public interface TournamentRepository extends JpaRepository<Tournaments, String>
{
	
}
