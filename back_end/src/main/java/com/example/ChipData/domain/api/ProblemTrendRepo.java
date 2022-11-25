package com.example.ChipData.domain.api;

import com.example.ChipData.domain.ProblemTrend;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProblemTrendRepo extends JpaRepository<ProblemTrend, Integer> {
}
