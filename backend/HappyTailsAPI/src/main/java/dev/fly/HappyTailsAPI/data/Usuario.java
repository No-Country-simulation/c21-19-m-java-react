package dev.fly.HappyTailsAPI.data;

import jakarta.persistence.*;
import java.util.Set;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;
import org.hibernate.type.TrueFalseConverter;

@Entity
@Data
@Table(name = "usuario")

public class Usuario {

    @Id
    @Column(name = "dni", length = 12, nullable = false)
    private int dni;
    @Column(length = 25, nullable = false)
    private String nombre;

    @Column(length = 45, nullable = false)
    private String correo;
    @Column(length = 12, nullable = false)
    private String clave;

    @Column(nullable = false)
    @Convert(converter = TrueFalseConverter.class)
    private Boolean estado;
    
    @OneToMany(mappedBy = "usuario", cascade = {CascadeType.PERSIST, CascadeType.MERGE}, orphanRemoval = true)
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private Set<Adopcion> adopciones;

}
