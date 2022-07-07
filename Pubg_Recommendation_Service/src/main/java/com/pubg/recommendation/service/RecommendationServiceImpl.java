package com.pubg.recommendation.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.pubg.recommendation.club.PlayerAndRecommed;
import com.pubg.recommendation.club.PlayersList;
import com.pubg.recommendation.entity.RecommendationList;
import com.pubg.recommendation.exception.ThePlayerAlreadyExistsInRecommendation;
import com.pubg.recommendation.exception.ThePlayerNotInRecommendation;
import com.pubg.recommendation.repo.RecommendationRepo;

@Service
public class RecommendationServiceImpl implements RecommendationService{

	@Autowired
	RecommendationRepo rrepo;
	
	@Autowired
	RestTemplate restTemplate;
	
	@Override
	public String save(RecommendationList recommendationList) throws ThePlayerAlreadyExistsInRecommendation {
		try {
			if (rrepo.existsById(recommendationList.getId())) {
				throw new ThePlayerAlreadyExistsInRecommendation("The Player already in recommendation !");
			} else {
				RecommendationList recList=	rrepo.save(recommendationList);
				return "Player added to recommended";
			}
		} catch (ThePlayerAlreadyExistsInRecommendation e) {
			e.printStackTrace();
		}
		return "Player not added to recommended";
	}

	@Override
	public PlayerAndRecommed findByRecommId(int id) throws ThePlayerNotInRecommendation {
		RecommendationList rlist=new RecommendationList();
		PlayerAndRecommed playerandrecommed=new PlayerAndRecommed();
		try {
			if(!rrepo.existsById(id))
				throw new ThePlayerNotInRecommendation("There no player with this recommendation id"+id);
			else {
				String url="http://localhost:8085/pubg/player/findbyid/";
				rlist=rrepo.findById(id).get();
				PlayersList playersList=restTemplate.getForObject(url+rlist.getPlayerId(),PlayersList.class);
				playerandrecommed.setRecommendationList(rlist);
				playerandrecommed.setPlayersList(playersList);
				return playerandrecommed;
			}
		} catch (ThePlayerNotInRecommendation e) {
			e.printStackTrace();
		}
		return playerandrecommed;
	}

	@Override
	public List<RecommendationList> view() {
		return rrepo.findAll();
	}

	@Override
	public String deleteByRecommId(int id) throws ThePlayerNotInRecommendation {
		RecommendationList rlist=new RecommendationList();
		try {
			if(rrepo.existsById(rlist.getId()))
				throw new ThePlayerNotInRecommendation("There no player with this recommendation id"+id);
			else {
				rrepo.deleteById(id);
				return "The player removed from recommended list";
			}
		} catch (ThePlayerNotInRecommendation e) {
			e.printStackTrace();
		}
		return "There no player with this recommendation id"+id;
	}

	@Override
	public String deleteall() {
		rrepo.deleteAll();
		return "All the players deleted in Recommendation";
	}

}
