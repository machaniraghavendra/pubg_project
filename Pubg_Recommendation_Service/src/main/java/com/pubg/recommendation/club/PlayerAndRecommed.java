package com.pubg.recommendation.club;

import com.pubg.recommendation.entity.RecommendationList;

public class PlayerAndRecommed {

	RecommendationList recommendationList;
	PlayersList playersList;
	
	public PlayerAndRecommed() {
		super();
	}
	public PlayerAndRecommed(RecommendationList recommendationList, PlayersList playersList) {
		super();
		this.recommendationList = recommendationList;
		this.playersList = playersList;
	}
	public RecommendationList getRecommendationList() {
		return recommendationList;
	}
	public void setRecommendationList(RecommendationList recommendationList) {
		this.recommendationList = recommendationList;
	}
	public PlayersList getPlayersList() {
		return playersList;
	}
	public void setPlayersList(PlayersList playersList) {
		this.playersList = playersList;
	}
	
}
