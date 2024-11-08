package dev.fly.HappyTailsAPI.repositories;

import dev.fly.HappyTailsAPI.data.Registro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Map;

public interface RegistroRepository extends JpaRepository<Registro, String> {
    @Query(value = "select " +
            "masc.id_mascotas, masc.estado, masc.edad, masc.medida, masc.nombre, " +
            "admi.alias, admi.correo, " +
            "regi.fecha_registro " +
            "from brvkha5gcmqmm4crcxlq.mascotas masc " +
            "inner join brvkha5gcmqmm4crcxlq.registro regi on masc.id_mascotas = regi.mascotas_id " +
            "inner join brvkha5gcmqmm4crcxlq.administrador admi on admi.alias = regi.administrador " +
            "where masc.estado = LOWER('t') ", nativeQuery = true)
    public List<Map<String, Object>> getRegistros();

    @Query(value = "select " +
            "masc.id_mascotas, masc.estado, masc.edad, masc.medida, masc.nombre, " +
            "admi.alias, admi.correo, " +
            "regi.fecha_registro " +
            "from brvkha5gcmqmm4crcxlq.mascotas masc " +
            "inner join brvkha5gcmqmm4crcxlq.registro regi on masc.id_mascotas = regi.mascotas_id " +
            "inner join brvkha5gcmqmm4crcxlq.administrador admi on admi.alias = regi.administrador " +
            "where masc.estado = LOWER(:estado) ", nativeQuery = true)
    public List<Map<String, Object>> getEstadoRegistros(@Param("estado") String estado);
}
