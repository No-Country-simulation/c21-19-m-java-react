package dev.fly.HappyTailsAPI.data;

import jakarta.persistence.*;
import java.util.List;
import lombok.Data;

@Entity
@Data
@Table(name = "administrador")

public class Administrador {

    @Id
    @Column(name = "id_registro", length = 12, nullable = false)
    private int IdRegistro;
    @Column(length = 12, nullable = false)
    private String dni;
    @Column(length = 25, nullable = false)
    private String nombre;
    @Column(length = 45, nullable = false)
    private String mail;
    @Column(length = 12, nullable = false)
    private String contrasenia;
    @Column(length = 25, nullable = false)
    private String telefono;
    @Column(length = 20, nullable = false)
    private String ubicacion;
    @Column(nullable = false)
    private boolean estado;
    
    @OneToMany(mappedBy = "administrador", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Mascotas> mascotas;
}
