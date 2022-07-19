package com.pubg.user.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class UserDetails {

	@Id
	private String userEmail;
	private String profilePic;
	private String userName;
	private String mobileNumber;
	private String password;
	
	public UserDetails() {
		super();
	}
	
	public String getProfilePic() {
		return profilePic;
	}

	public void setProfilePic(String profilePic) {
		this.profilePic = profilePic;
	}

	public UserDetails(String userEmail, String profilePic, String userName, String mobileNumber, String password) {
		super();
		this.userEmail = userEmail;
		this.profilePic = profilePic;
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
