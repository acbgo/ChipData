package com.example.ChipData.service;

import com.example.ChipData.domain.Production;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProductionService {
    public List<Production> getProductions();
}
