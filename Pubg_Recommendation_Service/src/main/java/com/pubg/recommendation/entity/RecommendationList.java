package com.pubg.recommendation.entity;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class RecommendationList {

	@Id
	private int id;
	private Integer playerId;
	
	public RecommendationList() {
		super();
	}

	public RecommendationList(int id, Integer playerId) {
		super();
		this.id = id;
		this.playerId = playerId;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Integer getPlayerId() {
		return playerId;
	}

	public void setPlayerId(Integer playerId) {
		this.playerId = playerId;
	}

	@Override
	public String toString() {
		return "RecommendationList [id=" + id + ", playerId=" + playerId + "]";
	}
	
}
