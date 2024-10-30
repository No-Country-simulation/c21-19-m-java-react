package dev.fly.HappyTailsAPI.controllers;

import dev.fly.HappyTailsAPI.data.Adopcion;
import dev.fly.HappyTailsAPI.services.AdopcionService;
import dev.fly.HappyTailsAPI.utils.AdopcionInput;
import dev.fly.HappyTailsAPI.utils.AdopcionLlaveCompuesta;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/colitasFelices")
@Validated
public class AdopcionControllers {
    
    @Autowired
    private AdopcionService services;
    
    @GetMapping("/adopcion")
    public List<Map<String, Object>> adopcion(){
        return services.adopcion();
    }
    
     @GetMapping("/adopcion/{estado}")
    public List<Map<String, Object>> estadoAdopcion(@PathVariable String estado){
        return services.adopcionPorEstado(estado);
    }
    
    @PostMapping("/adopcion")
    public Adopcion añadirAdopcion(@RequestBody AdopcionInput adopcion){
        return services.solicitudMascotaUsuario(adopcion);
    }

    @PutMapping("/adopcion/{dniUsuario}/{mascotasId}/{solicitud}")
    public Adopcion solicitudAdopcion(@PathVariable Integer dniUsuario, @PathVariable Integer mascotasId, @PathVariable String solicitud){
        AdopcionLlaveCompuesta id = new AdopcionLlaveCompuesta(dniUsuario, mascotasId);
        return services.adopcionMascotaUsuario(id, solicitud);
    }
    
    @DeleteMapping("/adopcion/{dniUsuario}/{mascotasId}")
    public void eliminarAdopcion(@PathVariable Integer dniUsuario, @PathVariable Integer mascotasId){
        AdopcionLlaveCompuesta id = new AdopcionLlaveCompuesta(dniUsuario, mascotasId);
        services.eliminarAdopcion(id);
    }
    
}
