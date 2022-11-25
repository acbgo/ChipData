package com.example.ChipData.service;

import com.example.ChipData.domain.Failure;
import com.example.ChipData.domain.api.FailureRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class FailureServiceImpl implements FailureService{
    @Autowired
    FailureRepo failureRepo;

    @Override
    public List<Failure> getFailures() {
        List<Failure> failures = failureRepo.findAll();
        return failures;
    }

    @Override
    public List<Map<Integer, Integer>> getProcessing() {
        List<Integer> processing = failureRepo.getProcessing();
        List<Map<Integer, Integer>> list = new ArrayList<>();
        for (int i = 0; i < processing.size(); i++) {
            Map<Integer, Integer> map = new HashMap<>();
            map.put(i+1, processing.get(i));
            list.add(map);
        }
        return list;
    }

}
