package dev.fly.HappyTailsAPI.controllers;

import dev.fly.HappyTailsAPI.data.Administrador;
import dev.fly.HappyTailsAPI.data.Usuario;
import dev.fly.HappyTailsAPI.services.AdministradorServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/colitasFelices")
@Validated
public class AdministradoresController {

    @Autowired
    private AdministradorServices services;

    @GetMapping("/admin")
    public List<Map<String, Object>> administradores(){
        return services.administradores();
    }

    @GetMapping("/admin/{estado}")
    public List<Map<String, Object>> estadoAdministradores(@PathVariable String estado){
        return services.estadoAdministradores(estado);
    }

    @PostMapping("/admin")
    public Administrador añadirAdministrador(@RequestBody Administrador usuario){
        return services.crearAdministrador(usuario);
    }

    @PutMapping("/admin/{alias}")
    public void modificarAdministrador(@PathVariable String alias, @RequestBody Administrador usuario){
        usuario.setAlias(alias);
        services.editarAdministrador(usuario);
    }

    @DeleteMapping("/admin/{alias}")
    public void eliminarAdministrador(@PathVariable String alias){
        services.eliminarAdministrador(alias);
    }
}
