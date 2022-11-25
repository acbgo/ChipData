package com.example.ChipData.service;

import com.example.ChipData.domain.Failure;
import com.example.ChipData.domain.api.FailureRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FailureServiceImpl implements FailureService{
    @Autowired
    FailureRepo failureRepo;

    @Override
    public List<Failure> getFailures() {
        List<Failure> failures = failureRepo.findAll();
        return failures;
    }
}
