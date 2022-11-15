package com.example.ChipData.domain.api;

import com.example.ChipData.domain.Chip;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ChipRepository extends JpaRepository<Chip, Integer> {
    @Query(nativeQuery = true, value = "select * from chip where id = ?1")
    public Chip findChipById(int id);

    @Query(nativeQuery = true, value = "select * from chip limit ?1 ;")
    public List<Chip> findPartChip(int count);
}
