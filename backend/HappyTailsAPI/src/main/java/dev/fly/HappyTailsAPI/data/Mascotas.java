package dev.fly.HappyTailsAPI.data;

import jakarta.persistence.*;
import java.util.Set;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Entity
@Data
@Table(name = "mascotas")

public class Mascotas {

    @Id
    @Column(name = "id_mascotas", nullable = false)
    private int IdMascotas;
    @Column(length = 25, nullable = false)
    private String nombre;
    @Column(length = 25, nullable = false)
    private String ubicacion;
    @Column(length = 20, nullable = false)
    private String color;
    @Column(length = 5, nullable = false)
    private float tamanio;
    @Column(length = 20, nullable = false)
    private String raza;
    @Column(length = 20, nullable = false)
    private String tipo;
    @Column(nullable = false)
    private boolean estado;

    @OneToMany(mappedBy = "mascotas", cascade = {CascadeType.PERSIST, CascadeType.MERGE}, orphanRemoval = true)
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private Set<Adopcion> adopciones;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_registro", nullable = true)
    private Administrador administrador;
}
