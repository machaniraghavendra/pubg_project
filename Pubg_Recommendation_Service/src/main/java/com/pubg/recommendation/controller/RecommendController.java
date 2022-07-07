package com.pubg.recommendation.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.pubg.recommendation.club.PlayerAndRecommed;
import com.pubg.recommendation.entity.RecommendationList;
import com.pubg.recommendation.exception.ThePlayerAlreadyExistsInRecommendation;
import com.pubg.recommendation.exception.ThePlayerNotInRecommendation;
import com.pubg.recommendation.service.RecommendationServiceImpl;

@RestController
@RequestMapping("/recommendationlistservice")
public class RecommendController {

	@Autowired
	RecommendationServiceImpl recommendationServiceImpl;
	
	@PostMapping("/")
	public String add(@RequestBody RecommendationList recommList) throws ThePlayerAlreadyExistsInRecommendation
	{
		return recommendationServiceImpl.save(recommList);
	}
	
	@GetMapping("/{id}")
	public PlayerAndRecommed findbyid(@PathVariable int id) throws ThePlayerNotInRecommendation
	{
		return recommendationServiceImpl.findByRecommId(id);
	}
	
	@GetMapping("/")
	public List<RecommendationList> view()
	{
		return recommendationServiceImpl.view();
	}
	
	@DeleteMapping("/{id}")
	public String delete(@PathVariable int id) throws ThePlayerNotInRecommendation
	{
		return recommendationServiceImpl.deleteByRecommId(id);
	}
	
	@DeleteMapping("/")
	public String delete()
	{
		return recommendationServiceImpl.deleteall();
	}
}
