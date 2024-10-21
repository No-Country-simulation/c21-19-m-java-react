package dev.fly.HappyTailsAPI.services;

import dev.fly.HappyTailsAPI.data.Administrador;

import java.util.List;
import java.util.Map;

public interface AdministradorServices {
    public List<Map<String, Object>> administradores();
    public List<Map<String, Object>> estadoAdministradores(String estado);
    public Administrador crearAdministrador(Administrador admin);
    public void editarAdministrador(Administrador admin);
    public void eliminarAdministrador(String alias);

}
