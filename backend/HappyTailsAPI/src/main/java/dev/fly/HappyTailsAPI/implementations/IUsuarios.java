package dev.fly.HappyTailsAPI.implementations;

import dev.fly.HappyTailsAPI.data.Usuario;
import dev.fly.HappyTailsAPI.repositories.UsuarioRepository;
import dev.fly.HappyTailsAPI.services.UsuarioServices;

import org.slf4j.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
public class IUsuarios implements UsuarioServices {

    private static final Logger log = LoggerFactory.getLogger(IUsuarios.class);

    @Autowired
    private UsuarioRepository repository;

    @Override
    @Transactional(readOnly = true)
    public List<Map<String, Object>> usuarios() {
        log.info("Obteniendo registros para los usuarios desde la  base de datos");
        var resultado = repository.getUsuarios();
        log.info("Se busco un total {} de usuarios registrados", resultado.size());
        return resultado;
    }

    @Override
    @Transactional(readOnly = true)
    public List<Map<String, Object>> estadoUsuarios(String estado) {
        log.info("Buscando usuarios en estado indicado");
        var resultado = List.<Map<String, Object>>of();
        if (estado.equalsIgnoreCase("T")) {
            resultado = repository.getEstadoUsuarios(estado);
            log.info("Usuarios activos encontrados {}", resultado.size());
        } else if (estado.equalsIgnoreCase("F")) {
            resultado = repository.getEstadoUsuarios(estado);
            log.info("Usuarios inactivos encontrados {}", resultado.size());
        } else {
            log.error("Estado introducido invalido {}", estado);
            throw new IllegalArgumentException("No registra el estado ingresado: " + estado);
        }
        return resultado;
    }

    @Override
    @Transactional
    public Usuario crearUsuario(Usuario data) {
        
        Usuario usuario = new Usuario();
        
        usuario.setDni(data.getDni());
        usuario.setNombre(data.getNombre());
        usuario.setCorreo(data.getCorreo());
        usuario.setClave(data.getClave()); usuario.setNombre(data.getNombre());
        usuario.setEstado(data.getEstado()!= null ? data.getEstado() : true);
        
        log.info("Nuevo usuario creado con documento: {}", usuario.getDni());
        return repository.save(usuario);
    }

    @Override
    @Transactional
    public void editarUsuario(Usuario data) {
        Usuario editar = repository.findById(String.valueOf(data.getDni())).orElseThrow(() ->
                new NoSuchElementException("Usuario no encontrado con documento: " + data.getDni())
        );
        editar.setDni(data.getDni());
        editar.setNombre(data.getNombre());
        editar.setCorreo(data.getCorreo());
        editar.setClave(data.getClave());
        editar.setEstado(data.getEstado()!= null ? data.getEstado() : true);
        repository.save(editar);
        log.info("Se edito usuario creado con documento: {}", editar.getDni());
    }

    @Override
    @Transactional
    public void eliminarUsuario(Integer documento) {
        Usuario eliminar = repository.findById(String.valueOf(documento)).orElseThrow(() ->
                new NoSuchElementException("Usuario no encontrado con documento: " + documento)
        );
        eliminar.setDni(documento);
        eliminar.setEstado(false);
        repository.save(eliminar);
        log.info("Usuario con documento: {} se dio de  baja exitosamente", eliminar.getDni());
    }
}
