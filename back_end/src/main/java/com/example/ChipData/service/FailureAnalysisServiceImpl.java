package com.example.ChipData.service;

import com.example.ChipData.domain.FailureAnalysis;
import com.example.ChipData.domain.api.FailureAnalysisRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FailureAnalysisServiceImpl implements FailureAnalysisService{
    @Autowired
    FailureAnalysisRepo failureAnalysisRepo;

    @Override
    public List<FailureAnalysis> getFailureAnalysis() {
        List<FailureAnalysis> failureAnalyses = failureAnalysisRepo.findAll();
        return failureAnalyses;
    }
}
