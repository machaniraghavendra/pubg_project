package com.pubg.email.service;

import java.io.File;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.pubg.email.entity.Email;

@Service
public class EmailServiceImpl implements EmailService{

	@Autowired 
	private JavaMailSender javaMailSender;

	@Override
	public String sendSimplemail(Email email) {
		try {
			SimpleMailMessage mailMessage = new SimpleMailMessage();
			mailMessage.setFrom("raghu1000.rm@gmail.com");
			mailMessage.setTo(email.getRecipient());
			mailMessage.setText(email.getMsgBody());
			mailMessage.setSubject(email.getSubject());
			javaMailSender.send(mailMessage);
			return "Mail Sent Successfully...";
		}
		catch (Exception e) {
			return "Error while Sending Mail or Mail Not Found";
		}
	}

	@Override
	public String senMailWithAttachment(Email email) {
		MimeMessage mimeMessage= javaMailSender.createMimeMessage();
		MimeMessageHelper mimeMessageHelper;
		try {
			mimeMessageHelper= new MimeMessageHelper(mimeMessage, true);
			mimeMessageHelper.setFrom("raghu1000.rm@gmail.com");
			mimeMessageHelper.setTo(email.getRecipient());
			mimeMessageHelper.setText(email.getMsgBody());
			mimeMessageHelper.setSubject(email.getSubject());
			FileSystemResource file= new FileSystemResource(new File(email.getAttachment()));

			mimeMessageHelper.addAttachment(file.getFilename(), file);

			javaMailSender.send(mimeMessage);
			return "Mail sent Successfully";
		}
		catch (MessagingException e) {
			return "Error while sending mail!!!";
		}
	}
}
