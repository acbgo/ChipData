package com.example.ChipData.service;

import com.example.ChipData.domain.Chip;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ChipService {
    public void saveChip(Chip chip);

    public List<Chip> findAllChip();

    public List<Chip> findPartChip(int count);

    public void deleteByID(int id);

    public Chip getById(int id);
}
