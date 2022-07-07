package com.pubg.recommendation.service;

import java.util.List;

import com.pubg.recommendation.club.PlayerAndRecommed;
import com.pubg.recommendation.entity.RecommendationList;
import com.pubg.recommendation.exception.ThePlayerAlreadyExistsInRecommendation;
import com.pubg.recommendation.exception.ThePlayerNotInRecommendation;

public interface RecommendationService {
	public String save(RecommendationList recommendationList) throws ThePlayerAlreadyExistsInRecommendation;
	public PlayerAndRecommed findByRecommId(int id) throws ThePlayerNotInRecommendation;
	public List<RecommendationList> view();
	public String deleteByRecommId(int id) throws ThePlayerNotInRecommendation;
	public String deleteall();
}
