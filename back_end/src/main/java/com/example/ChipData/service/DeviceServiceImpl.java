package com.example.ChipData.service;

import com.example.ChipData.domain.Devices;
import com.example.ChipData.domain.api.DeviceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeviceServiceImpl implements DeviceService{
    @Autowired
    DeviceRepo deviceRepo;

    @Override
    public List<Devices> getDevices() {
        List<Devices> devices = deviceRepo.findAll();
        return devices;
    }
}
