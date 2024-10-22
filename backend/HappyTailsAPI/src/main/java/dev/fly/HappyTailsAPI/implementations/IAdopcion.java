package dev.fly.HappyTailsAPI.implementations;

import dev.fly.HappyTailsAPI.data.Adopcion;
import dev.fly.HappyTailsAPI.data.Mascotas;
import dev.fly.HappyTailsAPI.data.Usuario;
import dev.fly.HappyTailsAPI.repositories.AdopcionRepository;
import dev.fly.HappyTailsAPI.services.AdopcionService;
import dev.fly.HappyTailsAPI.utils.AdopcionInput;
import dev.fly.HappyTailsAPI.utils.AdopcionLlaveCompuesta;
import java.util.List;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class IAdopcion implements AdopcionService {

    private static final Logger log = LoggerFactory.getLogger(IAdopcion.class);

    @Autowired
    private AdopcionRepository repository;

    @Override
    public List<Map<String, Object>> adopcion() {
        log.info("Obteniendo Adopciones desde la  base de datos");
        var resultado = repository.getAdopciones();
        log.info("Se busco un total {} de Adopciones en la base de datos", resultado.size());
        return resultado;
    }

    @Override
    public List<Map<String, Object>> adopcionPorEstado(String estado) {
        log.info("Buscando Adopciones por estado indicado");
        var resultado = List.<Map<String, Object>>of();
        if (estado.equalsIgnoreCase("T")) {
            resultado = repository.getEstadoAdopciones(estado);
            log.info("Adopciones activos encontrados {}", resultado.size());
        } else if (estado.equalsIgnoreCase("F")) {
            resultado = repository.getEstadoAdopciones(estado);
            log.info("Adopciones inactivos encontrados {}", resultado.size());
        } else {
            log.error("Estado introducido invalido {}", estado);
            throw new IllegalArgumentException("No registra el estado ingresado: " + estado);
        }
        return resultado;
    }

    @Override
    public Adopcion adopcionMascotaUsuario(AdopcionInput data) {
        Adopcion adopcion = new Adopcion();

        Usuario usuario = new Usuario();
        usuario.setDni(data.dniUsuario);
        Mascotas mascotas = new Mascotas();
        mascotas.setIdMascotas(data.idMascotas);

        AdopcionLlaveCompuesta id = new AdopcionLlaveCompuesta(data.dniUsuario, data.idMascotas);

        adopcion.setId(id);
        adopcion.setFechaAdopcion(data.fechaAdopcion);

        adopcion.setMascotas(mascotas);
        adopcion.setUsuario(usuario);
        log.info("Mascotas: {} registro exitosamente a la mascota: {}", adopcion.getUsuario(), adopcion.getMascotas());
        return repository.save(adopcion);
    }

    @Override
    public void eliminarAdopcion(AdopcionLlaveCompuesta id) {
        Adopcion adopcion = new Adopcion();
        adopcion.setId(id);

        repository.delete(adopcion);
    }

}
