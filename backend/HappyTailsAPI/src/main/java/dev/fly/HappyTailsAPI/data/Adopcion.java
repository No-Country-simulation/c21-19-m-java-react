package dev.fly.HappyTailsAPI.data;

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
    private MascotasLlaveCompuesta id;

    @Column(nullable = false)
    private String fechaAdopcion;
    @Column(nullable = false)
    private boolean estado;
    
    @ManyToOne
    @MapsId("dniUsuario")
    @JoinColumn(name = "dni_usuario", nullable = true)
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private Usuario usuario;
    
    @ManyToOne
    @MapsId("mascotasId")
    @JoinColumn(name = "mascotas_id", nullable = true)
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private Mascotas mascotas;

}
