package com.example.ChipData;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class writeCsv {
    public static void main(String[] args) {
        String csvUrl = "E:/OneDrive - 南方科技大学/大学/4 大三上/1 创新实践/routine/week8/ChipData/src/main/resources/static/Selection Guide_STM32.csv";

        List<String> dataList = new ArrayList<>();
        BufferedReader br = null;
        try{
            br = new BufferedReader(new FileReader(csvUrl));
            String line = "";
            while ((line=br.readLine()) != null){
                dataList.add(line);
            }
        } catch (Exception e){
            e.printStackTrace();
        } finally {
            if (br != null){
                try {
                    br.close();
                    br = null;
                } catch (IOException e){
                    e.printStackTrace();
                }
            }
        }

        boolean flag = true;
        int len = dataList.size();
        List<String> newList = new ArrayList<>();
        for (int i = 0; i < len; i++) {
            String line = dataList.get(i);
            if (i > 0){
                line = i + "," + line;
            }
            else {
                line = "id,model,kernel,frequency,flash,ram,encapsulation,io,voltage,timer_16,timer_32,usb,jpeg,gpu,temperature";
            }
            newList.add(line);
        }


        boolean isSusses = false;
        FileOutputStream out = null;
        OutputStreamWriter osw = null;
        BufferedWriter bw = null;
        try {
            out = new FileOutputStream(csvUrl);
            osw = new OutputStreamWriter(out);
            bw = new BufferedWriter(osw);
            if (newList != null && !newList.isEmpty()){
                for (String data : newList){
                    bw.append(data).append("\r");
                }
            }
            isSusses = true;
        }
        catch (Exception e){
            isSusses = false;
            e.printStackTrace();
        }
        finally {
            if(bw != null){
                try {
                    bw.close();
                    bw = null;
                } catch (IOException e){
                    e.printStackTrace();
                }
            }
            if (osw != null){
                try {
                    osw.close();
                    osw=null;
                } catch (IOException e){
                    e.printStackTrace();
                }
            }
            if (out != null){
                try {
                    out.close();
                    out=null;
                } catch (IOException e){
                    e.printStackTrace();
                }
            }
        }
        System.out.println(isSusses);
    }
}
