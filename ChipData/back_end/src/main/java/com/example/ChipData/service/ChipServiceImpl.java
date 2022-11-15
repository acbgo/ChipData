package com.example.ChipData.service;

import com.example.ChipData.domain.Chip;
import com.example.ChipData.domain.api.ChipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ChipServiceImpl implements ChipService{
    @Autowired
    ChipRepository chipRepository;

    @Override
    public void saveChip(Chip chip){
        chipRepository.save(chip);
    }

    @Override
    public List<Chip> findAllChip() {
        List<Chip> chips = chipRepository.findAll();
        return chips;
    }

    @Override
    public List<Chip> findPartChip(int count) {
        return chipRepository.findPartChip(count);
    }

    @Override
    public void deleteByID(int id) {
        chipRepository.deleteById(id);
    }

    @Override
    public Chip getById(int id) {
        return chipRepository.findChipById(id);
    }
}

