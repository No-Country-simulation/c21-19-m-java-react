package dev.fly.HappyTailsAPI.data;

import jakarta.persistence.*;
import java.util.Set;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;
import org.hibernate.type.TrueFalseConverter;

@Entity
@Data
@Table(name = "mascotas")

public class Mascotas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_mascotas", nullable = false)
    private int IdMascotas;
    @Column(length = 25, nullable = false)
    private String nombre;
    @Column(length = 25, nullable = false)
    private String medida;
    @Column(length = 20, nullable = false)
    private String raza;
    @Column(length = 20, nullable = false)
    private String especie;
    @Column(length = 255, nullable = false)
    private String descripcion;
    @Column(length = 20, nullable = false)
    private String edad;

    @Column(nullable = false)
    @Convert(converter = TrueFalseConverter.class)
    private Boolean estado;

    @OneToMany(mappedBy = "mascotas", cascade = {CascadeType.PERSIST, CascadeType.MERGE}, orphanRemoval = true)
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private Set<Adopcion> adopciones;


    @OneToMany(mappedBy = "mascotas", cascade = {CascadeType.PERSIST, CascadeType.MERGE}, orphanRemoval = true)
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private Set<Registro> registros;
}
