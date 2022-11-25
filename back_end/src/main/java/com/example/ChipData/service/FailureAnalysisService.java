package com.example.ChipData.service;

import com.example.ChipData.domain.FailureAnalysis;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface FailureAnalysisService {
    public List<FailureAnalysis> getFailureAnalysis();
}
