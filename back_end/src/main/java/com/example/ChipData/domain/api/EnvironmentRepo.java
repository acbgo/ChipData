package com.example.ChipData.domain.api;

import com.example.ChipData.domain.Environment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EnvironmentRepo extends JpaRepository<Environment, Integer> {
}
