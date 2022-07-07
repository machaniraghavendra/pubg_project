package com.players.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Players {

	@Id
	private Integer id;
	private String name;
	private String skill;
	private String strength;
	private float amount;
	public Players() {
		super();
	}
	public Players(Integer id, String name, String skill, String strength, float amount) {
		super();
		this.id = id;
		this.name = name;
		this.skill = skill;
		this.strength = strength;
		this.amount = amount;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSkill() {
		return skill;
	}
	public void setSkill(String skill) {
		this.skill = skill;
	}
	public String getStrength() {
		return strength;
	}
	public void setStrength(String strength) {
		this.strength = strength;
	}
	public float getAmount() {
		return amount;
	}
	public void setAmount(float amount) {
		this.amount = amount;
	}
	@Override
	public String toString() {
		return "Players [id=" + id + ", name=" + name + ", skill=" + skill + ", strength=" + strength + ", amount="
				+ amount + "]";
	}
}
