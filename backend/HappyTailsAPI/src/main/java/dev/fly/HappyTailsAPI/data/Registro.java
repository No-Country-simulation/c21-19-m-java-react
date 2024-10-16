package dev.fly.HappyTailsAPI.data;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.type.TrueFalseConverter;

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
    @MapsId("adminsitradorAlias")
    @JoinColumn(name = "adminsitrador", nullable = true)
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
