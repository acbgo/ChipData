package com.example.ChipData.service;

import com.example.ChipData.domain.Environment;
import com.example.ChipData.domain.api.EnvironmentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EnvironmentServiceImpl implements EnvironmentService{
    @Autowired
    EnvironmentRepo environmentRepo;

    @Override
    public List<Environment> getEnvironments() {
        List<Environment> environments = environmentRepo.findAll();
        return environments;
    }
}
