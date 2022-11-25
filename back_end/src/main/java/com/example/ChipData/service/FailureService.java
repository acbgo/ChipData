package com.example.ChipData.service;

import com.example.ChipData.domain.Failure;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface FailureService {
    public List<Failure> getFailures();
}
