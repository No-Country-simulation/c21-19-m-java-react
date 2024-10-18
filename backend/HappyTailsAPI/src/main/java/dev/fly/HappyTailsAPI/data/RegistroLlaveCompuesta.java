package dev.fly.HappyTailsAPI.data;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Embeddable
@Data
@NoArgsConstructor
@AllArgsConstructor

public class RegistroLlaveCompuesta implements Serializable{
    private String administradorAlias;
    private int mascotasId;
}
