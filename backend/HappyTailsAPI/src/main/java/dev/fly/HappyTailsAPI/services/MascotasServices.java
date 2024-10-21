package dev.fly.HappyTailsAPI.services;

import dev.fly.HappyTailsAPI.data.Mascotas;
import java.util.List;
import java.util.Map;
import org.springframework.web.bind.annotation.PathVariable;

public interface MascotasServices {
    public List<Map<String, Object>> mascotas();
    public List<Map<String, Object>> estadoMascotas(@PathVariable String estado);
    public Mascotas crearMascotas(Mascotas mascota);
    public void editarMascotas(Mascotas data);
    public void eliminarMascotas(Integer documento);
}
