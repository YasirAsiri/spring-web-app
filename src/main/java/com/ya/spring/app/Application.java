/**
*@author YasirAsiri
*@date 23 Nov. 2018
*@time 7:48:11 pm
*/
package com.ya.spring.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
	
	   @Bean
	   public RestTemplate getRestTemplate() {
	      return new RestTemplate();
	   }
}
