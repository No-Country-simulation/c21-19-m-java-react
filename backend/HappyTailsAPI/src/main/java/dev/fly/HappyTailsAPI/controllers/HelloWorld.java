package dev.fly.HappyTailsAPI.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorld {

    @GetMapping("/hi")
    public String helloWorld(){
        return "Hello world from API Colitas Felices";
    }
}
