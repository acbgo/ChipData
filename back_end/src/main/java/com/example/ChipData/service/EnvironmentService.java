package com.example.ChipData.service;

import com.example.ChipData.domain.Environment;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface EnvironmentService {
    public List<Environment> getEnvironments();
}
