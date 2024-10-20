package dev.fly.HappyTailsAPI.services;

import java.util.List;
import java.util.Map;

public interface RegistroService {
    public List<Map<String, Object>> mascotaDisponible();
    public List<Map<String, Object>> mascotaNoDisponible();
}
