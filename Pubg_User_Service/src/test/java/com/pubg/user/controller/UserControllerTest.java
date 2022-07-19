package com.pubg.user.controller;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import java.util.LinkedList;
import java.util.List;
import javax.ws.rs.core.MediaType;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.pubg.user.entity.UserDetails;
import com.pubg.user.exception.UserAlreadyExistsException;
import com.pubg.user.exception.UserNotFoundException;
import com.pubg.user.service.UserServiceImpl;

@WebMvcTest
class UserControllerTest {

	@MockBean
	UserServiceImpl servImpl;

	@Autowired
	MockMvc mockMvc;

	ObjectMapper objectMapper=new  ObjectMapper();
	ObjectWriter objectWriter=objectMapper.writer();

	UserDetails details=new UserDetails();

	@BeforeEach
	public void setUp(){
		details = new UserDetails();
	}

	@AfterEach
	public void tearDown(){
		details = null;
	}

	@Test
	void testSignin() throws Exception ,UserAlreadyExistsException{

		UserDetails details=new UserDetails("test","test","986611","12345","hello");

		when(servImpl.save(details)).thenReturn("User saved");

		String val=objectWriter.writeValueAsString(details);

		mockMvc.perform(post("/userservice/").
				contentType(MediaType.APPLICATION_JSON).
				content(val)).
		andExpect(status().isOk());
	}

	@Test
	void testUpdate() throws Exception,UserAlreadyExistsException {
		UserDetails details=new UserDetails("raghu@gmail.com","Raghu","986611","12345","hello");

		UserDetails detailsNew=new UserDetails("raghu1000@gmail.com","Raghavendra","98661112","1233","hello");

		when(servImpl.updateUserDetails(detailsNew)).thenReturn("User updated");

		String val=objectWriter.writeValueAsString(detailsNew);

		mockMvc.perform(put("/userservice/").contentType(MediaType.APPLICATION_JSON).content(val)).andExpect(status().isOk());
	}


	@Test
	void testDeletebyemail() throws UserNotFoundException, JsonProcessingException ,Exception{
		UserDetails details=new UserDetails("raghu@gmail.com","Raghu","986611","12345","hello");

		when(servImpl.deleteByuserEmail("raghu@gmail.com")).thenReturn("User deleted with email "+details.getUserEmail());

		mockMvc.perform(delete("/userservice/raghu@gmail.com").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isAccepted());
	}

	@Test
	void testFindall() throws Exception {
		List<UserDetails> user=new LinkedList<>();

		user.add(new UserDetails("raghu@gmail.com","Raghu","9866111336","Raghu@1987","hello"));
		user.add(new UserDetails("venkat@gmail.com","Venkat","123456789","venkat@1128","hello"));
		user.add(new UserDetails("Madhu@gmail.com","Madhu","987654321","Madhu@1234","hello"));
		user.add(new UserDetails("Manish@gmail.com","Manish","0192837465","Manish@1567","hello"));

		when(servImpl.findall()).thenReturn(user);

		mockMvc.perform(get("/userservice/")
				.contentType(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk());
	}

	@Test
	void testFindbyemail() throws Exception {
		UserDetails user=new UserDetails("raghu@gmail.com","Raghu","9866111336","Raghu@1987","hello");

		when(servImpl.findbymail("raghu@gmail.com")).thenReturn(user);

		mockMvc.perform(get("/userservice/").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk());

	}

	@Test
	void testCheck() throws Exception {

		UserDetails user=new UserDetails("raghu@gmail.com","Raghu","9866111336","Raghu@1987","hello");

		when(servImpl.check("raghu@gmail.com", "Raghu@1987")).thenReturn(true);

		mockMvc.perform(get("/userservice/raghu@gmail.com/Raghu@1987").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk());

	}

}
