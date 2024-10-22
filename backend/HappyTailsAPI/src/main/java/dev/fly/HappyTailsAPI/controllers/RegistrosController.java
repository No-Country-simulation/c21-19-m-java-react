package dev.fly.HappyTailsAPI.controllers;

import dev.fly.HappyTailsAPI.utils.RegistroInput;
import dev.fly.HappyTailsAPI.data.Registro;
import dev.fly.HappyTailsAPI.utils.RegistroLlaveCompuesta;
import dev.fly.HappyTailsAPI.services.RegistroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/colitasFelices")
@Validated
public class RegistrosController {

    @Autowired
    private RegistroService services;

    @GetMapping("/registros")
    public List<Map<String, Object>> usuarios(){
        return services.registros();
    }

    @GetMapping("/registros/{estado}")
    public List<Map<String, Object>> estadoUsuarios(@PathVariable String estado){
        return services.registrosPorEstado(estado);
    }

    @PostMapping("/registros")
    public Registro añadirRegistro(@RequestBody RegistroInput registro){
        return services.registroAdminMascotas(registro);
    }

    @DeleteMapping("/registros/{alias}/{idmascota}")
    public void eliminarUsuario(@PathVariable String alias, @PathVariable Integer idmascota){
        RegistroLlaveCompuesta id = new RegistroLlaveCompuesta(alias, idmascota);
        services.eliminarRegistro(id);
    }
}
