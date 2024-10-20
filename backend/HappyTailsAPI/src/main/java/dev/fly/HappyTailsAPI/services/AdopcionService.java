package dev.fly.HappyTailsAPI.services;

import java.util.List;
import java.util.Map;

public interface AdopcionService {
    public List<Map<String, Object>> adopcionesAprobadas();
    public List<Map<String, Object>> adopcionesRechazadas();
}
