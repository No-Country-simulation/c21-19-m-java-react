package dev.fly.HappyTailsAPI.services;

import dev.fly.HappyTailsAPI.utils.RegistroInput;
import dev.fly.HappyTailsAPI.data.Registro;
import dev.fly.HappyTailsAPI.utils.RegistroLlaveCompuesta;

import java.util.List;
import java.util.Map;

public interface RegistroService {
    public List<Map<String, Object>> registros();
    public List<Map<String, Object>> registrosPorEstado(String estado);
    public Registro registroAdminMascotas(RegistroInput data);
    public void eliminarRegistro(RegistroLlaveCompuesta id);
}
