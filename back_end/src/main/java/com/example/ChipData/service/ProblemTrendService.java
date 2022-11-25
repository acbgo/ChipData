package com.example.ChipData.service;

import com.example.ChipData.domain.ProblemTrend;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProblemTrendService {
    public List<ProblemTrend> getProblemTrends();
}
