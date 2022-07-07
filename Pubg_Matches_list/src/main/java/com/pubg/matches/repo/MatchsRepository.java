package com.pubg.matches.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pubg.matches.entity.Matches;

public interface MatchsRepository extends JpaRepository<Matches,String> {

}
