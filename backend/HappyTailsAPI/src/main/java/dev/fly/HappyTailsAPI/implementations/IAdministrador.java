package dev.fly.HappyTailsAPI.implementations;

import dev.fly.HappyTailsAPI.data.Administrador;
import dev.fly.HappyTailsAPI.repositories.AdministradorRepository;
import dev.fly.HappyTailsAPI.services.AdministradorServices;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

@Service
public class IAdministrador implements AdministradorServices {

    private static final Logger log = LoggerFactory.getLogger(IAdministrador.class);

    @Autowired
    AdministradorRepository repository;

    @Override
    public List<Map<String, Object>> administradores() {
        log.info("Obteniendo registros para usuarios administradores");
        var resultado = repository.getAdministrador();
        log.info("Total {} de registros usuarios administradores encontrados", resultado.size());
        return resultado;
    }

    @Override
    public List<Map<String, Object>> estadoAdministradores(String estado) {
        log.info("Buscando registros de usuarios administradores");
        var resultado = List.<Map<String, Object>>of();
        if (estado.equalsIgnoreCase("T")) {
            resultado = repository.getEstadoAdministrador(estado);
            log.info("Usuarios activos encontrados {}", resultado.size());
        } else if (estado.equalsIgnoreCase("F")) {
            resultado = repository.getEstadoAdministrador(estado);
            log.info("Usuarios inactivos encontrados {}", resultado.size());
        } else {
            log.error("Estado introducido invalido {}", estado);
            throw new IllegalArgumentException("No registra el estado ingresado: " + estado);
        }
        return resultado;
    }

    @Override
    public Administrador crearAdministrador(Administrador admin) {
        Administrador usuario = new Administrador();
        usuario.setAlias(admin.getAlias());
        usuario.setNombre(admin.getNombre());
        usuario.setCorreo(admin.getCorreo());
        usuario.setClave(admin.getClave());
        usuario.setEstado(admin.getEstado() != null ? admin.getEstado() : true);
        log.info("Registro de usuario exito, cuenta: {}, correo: {}", usuario.getAlias(), usuario.getCorreo());
        return repository.save(usuario);
    }

    @Override
    public void editarAdministrador(Administrador admin) {
        Administrador editar = repository.findById(String.valueOf(admin.getAlias())).orElseThrow(() ->
                new NoSuchElementException("Cuenta: {} no encontrada " + admin.getAlias())
        );
        editar.setAlias(admin.getAlias());
        editar.setNombre(admin.getNombre());
        editar.setCorreo(admin.getCorreo());
        editar.setClave(admin.getClave());
        editar.setEstado(admin.getEstado()!= null ? admin.getEstado() : true);
        repository.save(editar);
        log.info("Usuario: {} editado exitosamente", editar.getAlias());
    }

    @Override
    public void eliminarAdministrador(String alias) {
        Administrador eliminar = repository.findById(alias).orElseThrow(() ->
                new NoSuchElementException("Usuario {} no encontrado en el registro" + alias)
        );
        eliminar.setAlias(alias);
        eliminar.setEstado(false);
        repository.save(eliminar);
        log.info("Usuario {} se dio de  baja exitosamente", eliminar.getAlias());
    }
}
