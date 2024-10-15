package dev.fly.HappyTailsAPI.data;

import jakarta.persistence.Embeddable;
import java.io.Serializable;
import lombok.*;

@Embeddable
@Data
@NoArgsConstructor
@AllArgsConstructor

public class MascotasLlaveCompuesta implements Serializable{
    private int dniUsuario; 
    private int mascotasId;
}
