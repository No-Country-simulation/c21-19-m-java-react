package dev.fly.HappyTailsAPI.data;

import jakarta.persistence.*;
import java.util.Set;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Entity
@Data
@Table(name = "usuario")

public class Usuario {

    @Id
    @Column(name = "dni", length = 12, nullable = false)
    private int dni;
    @Column(length = 25, nullable = false)
    private String nombre;
    @Column(length = 25, nullable = false)
    private String apellido;
    @Column(length = 45, nullable = false)
    private String mail;
    @Column(length = 12, nullable = false)
    private String contrasenia;
    @Column(nullable = false)
    private boolean estado;
    
    @OneToMany(mappedBy = "usuario", cascade = {CascadeType.PERSIST, CascadeType.MERGE}, orphanRemoval = true)
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private Set<Adopcion> adopciones;

}
