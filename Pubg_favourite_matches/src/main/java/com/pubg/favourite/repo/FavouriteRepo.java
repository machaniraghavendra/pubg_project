package com.pubg.favourite.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.pubg.favourite.entity.FavouriteMatches;

@Repository
public interface FavouriteRepo extends JpaRepository<FavouriteMatches, String> {

}
