package dev.fly.HappyTailsAPI.implementations;

import dev.fly.HappyTailsAPI.data.Mascotas;
import dev.fly.HappyTailsAPI.repositories.MascotaRepository;
import dev.fly.HappyTailsAPI.services.MascotasServices;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service

public class IMascotas implements MascotasServices {

    private static final Logger log = LoggerFactory.getLogger(IMascotas.class);

    @Autowired
    private MascotaRepository repository;

    @Override
    @Transactional(readOnly = true) //agregar a todos los objs bajo el @Override
    public List<Map<String, Object>> mascotas() {
        log.info("Obteniendo registros para las Mascotas desde la  base de datos");
        var resultado = repository.getMascotas();
        log.info("Se busco un total {} de Mascotas registrados", resultado.size());
        return resultado;
    }

    @Override
    @Transactional(readOnly = true)
    public List<Map<String, Object>> estadoMascotas(String estado) {
        log.info("Buscando mascotas en estado indicado");
        var resultado = List.<Map<String, Object>>of();
        if (estado.equalsIgnoreCase("T")) {
            resultado = repository.getEstadoMascotas(estado);
            log.info("Mascotas activos encontrados {}", resultado.size());
        } else if (estado.equalsIgnoreCase("F")) {
            resultado = repository.getEstadoMascotas(estado);
            log.info("Mascotas inactivos encontrados {}", resultado.size());
        } else {
            log.error("Estado introducido invalido {}", estado);
            throw new IllegalArgumentException("No registra el estado ingresado: " + estado);
        }
        return resultado;
    }

    @Override
    @Transactional
    public Mascotas crearMascotas(Mascotas mascota) {
        Mascotas registro = new Mascotas();

        registro.setNombre(mascota.getNombre());
        registro.setMedida(mascota.getMedida());
        registro.setRaza(mascota.getRaza());
        registro.setEspecie(mascota.getEspecie());
        registro.setDescripcion(mascota.getDescripcion());
        registro.setEdad(mascota.getEdad());
        registro.setImagen(mascota.getImagen());
        registro.setEstado(mascota.getEstado() != null ? mascota.getEstado() : true);

        log.info("Nuevo mascota creado con Id: {}", registro.getIdMascotas());
        return repository.save(registro);
    }

    @Override
    @Transactional
    public void editarMascotas(Mascotas data) {
        Mascotas editar = repository.findById(String.valueOf(data.getIdMascotas())).orElseThrow(()
                -> new NoSuchElementException("Usuario no encontrado con Id: " + data.getIdMascotas())
        );
        editar.setIdMascotas(data.getIdMascotas());
        editar.setNombre(data.getNombre());
        editar.setMedida(data.getMedida());
        editar.setRaza(data.getRaza());
        editar.setEspecie(data.getEspecie());
        editar.setDescripcion(data.getDescripcion());
        editar.setEdad(data.getEdad());
        editar.setImagen(data.getImagen());
        editar.setEstado(data.getEstado() != null ? data.getEstado() : true);
        repository.save(editar);
        log.info("Se edito Mascota creado con Id: {}", editar.getIdMascotas());
    }

    @Override
    @Transactional
    public void eliminarMascotas(Integer documento) {
        Mascotas eliminar = repository.findById(String.valueOf(documento)).orElseThrow(()
                -> new NoSuchElementException("Mascota no encontrado con Id: " + documento)
        );
        eliminar.setIdMascotas(documento);
        eliminar.setEstado(false);
        repository.save(eliminar);
        log.info("Mascota con Id: {} se dio de  baja exitosamente", eliminar.getIdMascotas());
    }

}
