package dev.fly.HappyTailsAPI.controllers;

import dev.fly.HappyTailsAPI.data.Usuario;
import dev.fly.HappyTailsAPI.services.UsuarioServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/colitasFelices")
@Validated
public class UsuariosController {

    @Autowired
    private UsuarioServices services;

    @GetMapping("/usuarios")
    public List<Map<String, Object>> usuarios(){
        return services.usuarios();
    }

    @GetMapping("/usuarios/{estado}")
    public List<Map<String, Object>> estadoUsuarios(@PathVariable String estado){
        return services.estadoUsuarios(estado);
    }

    @PostMapping("/usuarios")
    public Usuario añadirUsuario(@RequestBody Usuario usuario){
        return services.crearUsuario(usuario);
    }

    @PutMapping("/usuarios/{documento}")
    public void modificarUsuario(@PathVariable Integer documento, @RequestBody Usuario usuario){
        usuario.setDni(documento);
        services.editarUsuario(usuario);
    }

    @DeleteMapping("/usuarios/{documento}")
    public void eliminarUsuario(@PathVariable Integer documento){
        services.eliminarUsuario(documento);
    }

}
