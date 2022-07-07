package com.pubg.email.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pubg.email.entity.Email;
import com.pubg.email.service.EmailServiceImpl;

@CrossOrigin(origins = "*")
@RestController
public class EmailController {

	@Autowired
	private EmailServiceImpl emailimpl;
	
	@PostMapping("/sendmail")
	public String sendMail(@RequestBody Email mail)
	{
		String status=emailimpl.sendSimplemail(mail);
		return status;
	}
	
	@PostMapping("/sendMailWithAttachment")
	public String sendMailWithAttachment(@RequestBody Email mail)
	{
		String status=emailimpl.senMailWithAttachment(mail);
		return status;
	}
}
