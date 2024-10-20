package dev.fly.HappyTailsAPI.services;

import java.util.List;
import java.util.Map;

public interface AdministradorServices {
    public List<Map<String, Object>> administradoresActivos();
    public List<Map<String, Object>> administradoresInactivos();
}
