package com.pubg.user.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class UserDetails {

	@Id
	private String userEmail;
	private String userName;
	private String mobileNumber;
	private String password;
	public UserDetails() {
		super();
	}
	public UserDetails(String userEmail, String userName, String mobileNumber, String password) {
		super();
		this.userEmail = userEmail;
		this.userName = userName;
		this.mobileNumber = mobileNumber;
		this.password = password;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
}
