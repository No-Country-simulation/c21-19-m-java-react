package dev.fly.HappyTailsAPI.data;

import com.fasterxml.jackson.annotation.JsonIgnore;
import dev.fly.HappyTailsAPI.utils.AdopcionLlaveCompuesta;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "adopcion")

public class Adopcion {

    @EmbeddedId
    private AdopcionLlaveCompuesta id;

    @Column(length = 15, nullable = false)
    private String solicitud;

    @Column(length = 255, nullable = false)
    private String fechaAdopcion;

    @ManyToOne
    @MapsId("dniUsuario")
    @JoinColumn(name = "dni_usuario", nullable = true)
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    @JsonIgnore
    private Usuario usuario;
    
    @ManyToOne
    @MapsId("mascotasId")
    @JoinColumn(name = "mascotas_id", nullable = true)
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    @JsonIgnore
    private Mascotas mascotas;

}
