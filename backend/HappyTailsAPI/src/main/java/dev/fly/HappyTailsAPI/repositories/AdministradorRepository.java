package dev.fly.HappyTailsAPI.repositories;

import dev.fly.HappyTailsAPI.data.Administrador;
import dev.fly.HappyTailsAPI.data.Mascotas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Map;

public interface AdministradorRepository extends JpaRepository<Administrador, String> {
    @Query(value = "select " +
            "alias, nombre, estado, correo " +
            "from mascotas.administrador " +
            "where estado = LOWER(:estado) ", nativeQuery = true)
    public List<Map<String, Object>> getUsuarios(@Param("estado") String estado);
}
