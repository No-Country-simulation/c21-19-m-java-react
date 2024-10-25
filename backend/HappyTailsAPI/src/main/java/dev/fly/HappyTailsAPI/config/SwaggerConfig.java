package dev.fly.HappyTailsAPI.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.servers.Server;

@OpenAPIDefinition(
        info = @Info(
                title = "Colitas Felices API",
                description = "Colitas Felices es una plataforma web que conecta a personas interesadas en adoptar mascotas con refugios o cuidadores temporales. Su objetivo es facilitar el proceso de adopción mediante una interfaz intuitiva, fácil de usar y accesible, tanto para quienes desean adoptar como para los refugios que publican animales en busca de un hogar."
        ),
        servers = {
                @Server(
                        description = "DEV SERVER",
                        url = "http://localhost:8080"
                )
        }
)
public class SwaggerConfig {
}
