package com.example.ChipData.domain.api;

import com.example.ChipData.domain.FailureAnalysis;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FailureAnalysisRepo extends JpaRepository<FailureAnalysis, Integer> {
}
