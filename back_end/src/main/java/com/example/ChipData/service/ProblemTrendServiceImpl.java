package com.example.ChipData.service;

import com.example.ChipData.domain.ProblemTrend;
import com.example.ChipData.domain.api.ProblemTrendRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProblemTrendServiceImpl implements ProblemTrendService{
    @Autowired
    ProblemTrendRepo problemTrendRepo;

    @Override
    public List<ProblemTrend> getProblemTrends() {
        List<ProblemTrend> problemTrends = problemTrendRepo.findAll();
        return problemTrends;
    }
}
