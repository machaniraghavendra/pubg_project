package com.pubg.email.service;

import com.pubg.email.entity.Email;

public interface EmailService {
	public String sendSimplemail(Email email);
	public String senMailWithAttachment(Email email);
}
