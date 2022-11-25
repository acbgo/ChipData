package com.example.ChipData.service;

import com.example.ChipData.domain.ProductionTrend;
import com.example.ChipData.domain.api.ProductionTrendRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductionTrendServiceImpl implements ProductionTrendService{
    @Autowired
    ProductionTrendRepo productionTrendRepo;

    @Override
    public List<ProductionTrend> getProductionTrends() {
        return productionTrendRepo.findAll();
    }
}
