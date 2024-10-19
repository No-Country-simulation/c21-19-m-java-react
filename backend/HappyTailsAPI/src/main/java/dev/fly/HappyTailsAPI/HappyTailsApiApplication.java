package dev.fly.HappyTailsAPI;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class HappyTailsApiApplication implements WebMvcConfigurer {

	public static void main(String[] args) {
		SpringApplication.run(HappyTailsApiApplication.class, args);
	}

}