package com.pubg.recommendation.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pubg.recommendation.entity.RecommendationList;

@Repository
public interface RecommendationRepo extends JpaRepository<RecommendationList, Integer> {

}
