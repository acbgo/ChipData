package com.example.ChipData.domain.api;

import com.example.ChipData.domain.Failure;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FailureRepo extends JpaRepository<Failure, Integer> {
    @Query(nativeQuery = true, value = "select processing from failure where month = 1;")
    public List<Integer> getProcessing();

}
