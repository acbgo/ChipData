package com.example.ChipData.service;

import com.example.ChipData.domain.Factor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface FactorService {
    public List<Factor> getFactors();
}
