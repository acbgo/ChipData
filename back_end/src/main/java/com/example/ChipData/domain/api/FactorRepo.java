package com.example.ChipData.domain.api;

import com.example.ChipData.domain.Factor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FactorRepo extends JpaRepository<Factor, Integer> {
}
