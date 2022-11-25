package com.example.ChipData.service;

import com.example.ChipData.domain.Factor;
import com.example.ChipData.domain.api.FactorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FactorServiceImpl implements FactorService{
    @Autowired
    FactorRepo factorRepo;

    @Override
    public List<Factor> getFactors() {
        List<Factor> factors = factorRepo.findAll();
        return factors;
    }
}
