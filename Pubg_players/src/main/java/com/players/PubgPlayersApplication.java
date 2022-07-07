package com.players;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.loadbalancer.annotation.LoadBalancerClient;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class PubgPlayersApplication 
{
	public static void main(String[] args) {
		SpringApplication.run(PubgPlayersApplication.class, args);
	}

}
