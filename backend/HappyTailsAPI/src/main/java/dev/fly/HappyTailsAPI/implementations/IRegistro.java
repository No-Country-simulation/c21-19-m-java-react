package dev.fly.HappyTailsAPI.implementations;

import dev.fly.HappyTailsAPI.data.*;
import dev.fly.HappyTailsAPI.repositories.RegistroRepository;
import dev.fly.HappyTailsAPI.services.RegistroService;
import dev.fly.HappyTailsAPI.utils.RegistroInput;
import dev.fly.HappyTailsAPI.utils.RegistroLlaveCompuesta;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class IRegistro implements RegistroService {

    private static final Logger log = LoggerFactory.getLogger(IRegistro.class);

    @Autowired
    private RegistroRepository repository;

    @Override
    public List<Map<String, Object>> registros() {
        log.info("Obteniendo registros desde la  base de datos");
        var resultado = repository.getRegistros();
        log.info("Se busco un total {} de registros en la base de datos", resultado.size());
        return resultado;
    }

    @Override
    public List<Map<String, Object>> registrosPorEstado(String estado) {
        log.info("Buscando registros por estado indicado");
        var resultado = List.<Map<String, Object>>of();
        if (estado.equalsIgnoreCase("T")) {
            resultado = repository.getEstadoRegistros(estado);
            log.info("Registros activos encontrados {}", resultado.size());
        } else if (estado.equalsIgnoreCase("F")) {
            resultado = repository.getEstadoRegistros(estado);
            log.info("Registros inactivos encontrados {}", resultado.size());
        } else {
            log.error("Estado introducido invalido {}", estado);
            throw new IllegalArgumentException("No registra el estado ingresado: " + estado);
        }
        return resultado;
    }

    @Override
    public Registro registroAdminMascotas(RegistroInput data) {
        Registro registro = new Registro();

        Administrador admin = new Administrador();
        admin.setAlias(data.alias);
        Mascotas mascotas = new Mascotas();
        mascotas.setIdMascotas(data.idMascoda);

        RegistroLlaveCompuesta id = new RegistroLlaveCompuesta(data.alias, data.idMascoda);

        registro.setId(id);
        registro.setFechaRegistro(data.fechaRegistro);

        registro.setMascotas(mascotas);
        registro.setAlias(admin);
        log.info("Usuario: {} registro exitosamente a la mascota: {}", registro.getAlias(), registro.getMascotas());
        return repository.save(registro);
    }


    @Override
    public void eliminarRegistro(RegistroLlaveCompuesta id) {
        Registro registro = new Registro();
        registro.setId(id);

        repository.delete(registro);
    }
}
