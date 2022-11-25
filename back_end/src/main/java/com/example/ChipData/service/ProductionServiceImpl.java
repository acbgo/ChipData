package com.example.ChipData.service;

import com.example.ChipData.domain.Production;
import com.example.ChipData.domain.api.ProductionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductionServiceImpl implements ProductionService {
    @Autowired
    ProductionRepository productionRepository;

    @Override
    public List<Production> getProductions() {
        List<Production> productions = productionRepository.findAll();
        return productions;
    }
}
