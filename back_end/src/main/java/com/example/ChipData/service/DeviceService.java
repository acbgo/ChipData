package com.example.ChipData.service;

import com.example.ChipData.domain.Devices;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface DeviceService {
    public List<Devices> getDevices();
}
