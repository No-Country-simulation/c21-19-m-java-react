package dev.fly.HappyTailsAPI.data;

import dev.fly.HappyTailsAPI.utils.RegistroLlaveCompuesta;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "registro")

public class Registro {

    @EmbeddedId
    private RegistroLlaveCompuesta id;

    @Column(nullable = false)
    private String fechaRegistro;

    @ManyToOne
    @MapsId("administradorAlias")
    @JoinColumn(name = "administrador", nullable = true)
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private Administrador alias;
    
    @ManyToOne
    @MapsId("mascotasId")
    @JoinColumn(name = "mascotas_id", nullable = true)
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private Mascotas mascotas;

}
