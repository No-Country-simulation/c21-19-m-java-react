package dev.fly.HappyTailsAPI.services;

import dev.fly.HappyTailsAPI.data.Adopcion;
import dev.fly.HappyTailsAPI.utils.AdopcionInput;
import dev.fly.HappyTailsAPI.utils.AdopcionLlaveCompuesta;

import java.util.List;
import java.util.Map;

public interface AdopcionService {
    public List<Map<String, Object>> adopcion();
    public List<Map<String, Object>> adopcionPorEstado(String estado);
    public Adopcion solicitudMascotaUsuario(AdopcionInput data);
    public Adopcion adopcionMascotaUsuario(AdopcionLlaveCompuesta id, String estadoSolicitud);
    public void eliminarAdopcion(AdopcionLlaveCompuesta id);
}
