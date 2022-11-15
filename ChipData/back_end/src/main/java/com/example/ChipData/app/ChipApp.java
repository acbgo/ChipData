package com.example.ChipData.app;

import com.example.ChipData.domain.Chip;
import com.example.ChipData.service.ChipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/chip")
public class ChipApp {

    @Autowired
    ChipService chipService;

    @PostMapping("/addChip")
    public Chip addChip(Chip chip){
        chipService.saveChip(chip);
        return chip;
    }

    @GetMapping("/findAllChip")
    public List<Chip> findAllChip(){
        return chipService.findAllChip();
    }

    @CrossOrigin(origins = "http://localhost:63342",maxAge = 3600)
    @GetMapping("findPart/{count}")
    public List<Chip> findPartChip(@PathVariable int count){return chipService.findPartChip(count);}

    @GetMapping("findById/{id}")
    public Chip getById(@PathVariable int id){
        return chipService.getById(id);
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteOne(@PathVariable int id){
        chipService.deleteByID(id);
    }


}
