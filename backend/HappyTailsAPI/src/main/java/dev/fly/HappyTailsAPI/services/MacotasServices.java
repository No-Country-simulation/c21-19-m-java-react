package dev.fly.HappyTailsAPI.services;

import java.util.List;
import java.util.Map;

public interface MacotasServices {
    public List<Map<String, Object>> mascotasActivas();
    public List<Map<String, Object>> mascotasInactivas();
}
