package dev.fly.HappyTailsAPI.services;

import dev.fly.HappyTailsAPI.data.Usuario;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Map;

public interface UsuarioServices {
    public List<Map<String, Object>> usuarios();
    public List<Map<String, Object>> estadoUsuarios(@PathVariable String estado);
    public Usuario crearUsuario(Usuario usuario);
    public void editarUsuario(Usuario data);
    public void eliminarUsuario(Integer documento);

}
