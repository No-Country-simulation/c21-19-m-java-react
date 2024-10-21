package dev.fly.HappyTailsAPI.controllers;

import dev.fly.HappyTailsAPI.data.Mascotas;
import dev.fly.HappyTailsAPI.data.Usuario;
import dev.fly.HappyTailsAPI.services.MascotasServices;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/colitasFelices")
@Validated

public class MascotasController {
    @Autowired
    private MascotasServices services;
    
    @GetMapping("/mascotas")
    public List<Map<String, Object>> mascotas(){
        return services.mascotas();
    }
    
    @GetMapping("/mascotas/{estado}")
    public List<Map<String, Object>> estadoMascotas(@PathVariable String estado){
        return services.estadoMascotas(estado);
    }
    
    @PostMapping("/mascotas")
    public Mascotas añadirMascotas(@RequestBody Mascotas mascota){
        return services.crearMascotas(mascota);
    }
    
    @PutMapping("/mascotas/{documento}")
    public void modificarMascotas(@PathVariable Integer documento, @RequestBody Mascotas mascota){
        mascota.setIdMascotas(documento);
        services.editarMascotas(mascota);
    }
    
    @DeleteMapping("/mascotas/{documento}")
    public void eliminarMascotas(@PathVariable Integer documento){
        services.eliminarMascotas(documento);
    }
}
