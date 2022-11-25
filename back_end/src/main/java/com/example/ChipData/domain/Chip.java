package com.example.ChipData.domain;

import org.springframework.context.annotation.Primary;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import java.util.ArrayList;
import java.util.List;

@XmlAccessorType(XmlAccessType.FIELD)
@XmlRootElement(name = "Chip")
@XmlType(propOrder = {
        "id",
        "model",
        "kernel",
        "frequency",
        "flash",
        "ram",
        "encapsulation",
        "io",
        "voltage",
        "timer_16",
        "timer_32",
        "usb",
        "jpeg",
        "gpu",
        "temperature",
})
@Entity
public class Chip {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String model;
    private String kernel;

    private int frequency;
    private int flash;
    private int ram;
    private String encapsulation;
    private int io;
    private String voltage;
    private String timer_16;
    private String timer_32;
    private int usb;
    private String jpeg;
    private String gpu;
    private int temperature;

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getModel() {
        return model;
    }

    public String getKernel() {
        return kernel;
    }

    public void setKernel(String kernel) {
        this.kernel = kernel;
    }

    public int getFrequency() {
        return frequency;
    }

    public void setFrequency(int frequency) {
        this.frequency = frequency;
    }

    public int getFlash() {
        return flash;
    }

    public void setFlash(int flash) {
        this.flash = flash;
    }

    public int getRam() {
        return ram;
    }

    public void setRam(int ram) {
        this.ram = ram;
    }

    public String getEncapsulation() {
        return encapsulation;
    }

    public void setEncapsulation(String encapsulation) {
        this.encapsulation = encapsulation;
    }

    public int getIo() {
        return io;
    }

    public void setIo(int io) {
        this.io = io;
    }

    public String getVoltage() {
        return voltage;
    }

    public void setVoltage(String voltage) {
        this.voltage = voltage;
    }

    public String getTimer_16() {
        return timer_16;
    }

    public void setTimer_16(String timer_16) {
        this.timer_16 = timer_16;
    }

    public String getTimer_32() {
        return timer_32;
    }

    public void setTimer_32(String timer_32) {
        this.timer_32 = timer_32;
    }

    public int getUsb() {
        return usb;
    }

    public void setUsb(int usb) {
        this.usb = usb;
    }

    public String getJpeg() {
        return jpeg;
    }

    public void setJpeg(String jpeg) {
        this.jpeg = jpeg;
    }

    public String getGpu() {
        return gpu;
    }

    public void setGpu(String gpu) {
        this.gpu = gpu;
    }

    public int getTemperature() {
        return temperature;
    }

    public void setTemperature(int temperature) {
        this.temperature = temperature;
    }

    @Override
    public String toString() {
        return "Chip{" +
                "id=" + id +
                ", model='" + model + '\'' +
                ", kernel='" + kernel + '\'' +
                ", frequency=" + frequency +
                ", flash=" + flash +
                ", ram=" + ram +
                ", encapsulation='" + encapsulation + '\'' +
                ", io=" + io +
                ", voltage='" + voltage + '\'' +
                ", timer_16='" + timer_16 + '\'' +
                ", timer_32='" + timer_32 + '\'' +
                ", usb=" + usb +
                ", jpeg='" + jpeg + '\'' +
                ", gpu='" + gpu + '\'' +
                ", temperature=" + temperature +
                '}';
    }
}
