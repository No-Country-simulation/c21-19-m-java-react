package dev.fly.HappyTailsAPI.repositories;

import dev.fly.HappyTailsAPI.data.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Map;

public interface UsuarioRepository extends JpaRepository<Usuario, String> {
    @Query(value = "select " +
            "dni, nombre, estado, correo " +
            "from mascotas.usuario " +
            "where estado = LOWER('t') ", nativeQuery = true)
    public List<Map<String, Object>> getUsuarios();
    @Query(value = "select " +
            "dni, nombre, estado, correo " +
            "from mascotas.usuario " +
            "where estado = LOWER(:estado) ", nativeQuery = true)
    public List<Map<String, Object>> getEstadoUsuarios(@Param("estado") String estado);
}
