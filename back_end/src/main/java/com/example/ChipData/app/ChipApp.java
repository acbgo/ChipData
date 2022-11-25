package com.example.ChipData.app;

import com.example.ChipData.domain.*;
import com.example.ChipData.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/chip")
public class ChipApp {

    @Autowired
    ChipService chipService;
    @Autowired
    ProductionService productionService;
    @Autowired
    FailureService failureService;
    @Autowired
    FactorService factorService;
    @Autowired
    FailureAnalysisService failureAnalysisService;
    @Autowired
    ProductionTrendService productionTrendService;
    @Autowired
    ProblemTrendService problemTrendService;
    @Autowired
    EnvironmentService environmentService;

    @PostMapping("/addChip")
    public Chip addChip(Chip chip){
        chipService.saveChip(chip);
        return chip;
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

    @GetMapping("/findAllChip")
    public List<Chip> findAllChip(){
        return chipService.findAllChip();
    }

    @GetMapping("/getProduction")
    public List<Production> getProductions(){
        return productionService.getProductions();
    }

    @GetMapping("/getFailure")
    public List<Failure> getFailures(){
        return failureService.getFailures();
    }

    @GetMapping("/getFactors")
    public List<Factor> getFactors(){
        return factorService.getFactors();
    }

    @GetMapping("/getFailureAnalysis")
    public List<FailureAnalysis> getFailureAnalysis(){
        return failureAnalysisService.getFailureAnalysis();
    }

    @GetMapping("/getProductionTrend")
    public List<ProductionTrend> getProductionTrend(){
        return productionTrendService.getProductionTrends();
    }

    @GetMapping("/getProblemTrend")
    public List<ProblemTrend> getProblemTrends(){
        return problemTrendService.getProblemTrends();
    }

    @GetMapping("/getEnvironment")
    public List<Environment> getEnvironment(){
        return environmentService.getEnvironments();
    }
}
