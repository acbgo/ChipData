package com.example.ChipData.service;

import com.example.ChipData.domain.ProductionTrend;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProductionTrendService {
    public List<ProductionTrend> getProductionTrends();
}
