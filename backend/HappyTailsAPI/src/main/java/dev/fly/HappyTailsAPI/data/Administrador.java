package dev.fly.HappyTailsAPI.data;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.type.TrueFalseConverter;

@Entity
@Data
@Table(name = "administrador")

public class Administrador {

    @Id
    @Column(length = 15, nullable = false)
    private String alias;

    @Column(length = 25, nullable = false)
    private String nombre;

    @Column(length = 45, nullable = false)
    private String correo;

    @Column(length = 12, nullable = false)
    private String clave;

    @Column(nullable = false)
    @Convert(converter = TrueFalseConverter.class)
    private Boolean estado;

}
