package com.example.ChipData.domain.api;

import com.example.ChipData.domain.Failure;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FailureRepo extends JpaRepository<Failure, Integer> {
}
