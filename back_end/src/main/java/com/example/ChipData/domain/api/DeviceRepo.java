package com.example.ChipData.domain.api;

import com.example.ChipData.domain.Devices;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DeviceRepo extends JpaRepository<Devices, Integer> {
}
