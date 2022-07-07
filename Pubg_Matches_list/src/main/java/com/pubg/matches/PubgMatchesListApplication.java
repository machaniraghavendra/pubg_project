package com.pubg.matches;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class PubgMatchesListApplication {

	public static void main(String[] args) {
		SpringApplication.run(PubgMatchesListApplication.class, args);
	}
}
