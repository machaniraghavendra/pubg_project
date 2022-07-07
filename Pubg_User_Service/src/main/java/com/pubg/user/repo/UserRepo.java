package com.pubg.user.repo;

import org.springframework.cloud.loadbalancer.annotation.LoadBalancerClient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pubg.user.entity.UserDetails;

@LoadBalancerClient
@Repository
public interface UserRepo extends JpaRepository<UserDetails,String>{
	boolean existsByuserEmail(String userEmail);
	String findBypassword(String password);
}
