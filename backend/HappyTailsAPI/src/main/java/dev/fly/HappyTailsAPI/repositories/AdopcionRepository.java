package dev.fly.HappyTailsAPI.repositories;


import dev.fly.HappyTailsAPI.data.Adopcion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Map;

public interface AdopcionRepository extends JpaRepository<Adopcion, String> {
    @Query(value = "select " +
            "usu.nombre, usu.correo, " +
            "masc.raza , masc.nombre, masc.edad, masc.medida, " +
            "adop.fecha_adopcion, masc.estado " +
            "from mascotas.adopcion adop " +
            "inner join mascotas.usuario usu on adop.dni_usuario = usu.dni " +
            "inner join mascotas.mascotas masc on adop.mascotas_id = masc.id_mascotas " +
            "where masc.estado = LOWER(:estado) ", nativeQuery = true)
    public List<Map<String, Object>> getAdopciones(@Param("estado") String estado);
}
