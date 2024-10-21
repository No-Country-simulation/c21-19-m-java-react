package dev.fly.HappyTailsAPI.repositories;

import dev.fly.HappyTailsAPI.data.Mascotas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Map;

public interface MacotaRepository extends JpaRepository<Mascotas, String> {
    @Query(value = "select " +
            "nombre, especie, raza, estado, medida, edad " +
            "from mascotas.mascotas " +
            "where estado = LOWER('t') ", nativeQuery = true)
    public List<Map<String, Object>> getMascotas();

    @Query(value = "select " +
            "nombre, especie, raza, estado, medida, edad " +
            "from mascotas.mascotas " +
            "where estado = LOWER(:estado) ", nativeQuery = true)
    public List<Map<String, Object>> getEstadoMascotas(@Param("estado") String estado);
}
