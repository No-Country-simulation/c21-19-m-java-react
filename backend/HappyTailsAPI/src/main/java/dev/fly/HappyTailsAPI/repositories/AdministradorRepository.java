package dev.fly.HappyTailsAPI.repositories;

import dev.fly.HappyTailsAPI.data.Administrador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Map;

public interface AdministradorRepository extends JpaRepository<Administrador, String> {
    @Query(value = "select " +
            "alias, nombre, estado, correo, clave " +
            "from brvkha5gcmqmm4crcxlq.administrador " +
            "where estado = LOWER('t') ", nativeQuery = true)
    public List<Map<String, Object>> getAdministrador();

    @Query(value = "select " +
            "alias, nombre, estado, correo, clave " +
            "from brvkha5gcmqmm4crcxlq.administrador " +
            "where estado = LOWER(:estado) ", nativeQuery = true)
    public List<Map<String, Object>> getEstadoAdministrador(@Param("estado") String estado);
}
