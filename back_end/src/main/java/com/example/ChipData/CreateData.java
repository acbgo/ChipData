package com.example.ChipData;

import java.sql.*;
import java.util.Random;

public class CreateData {
    static Connection con;
    static PreparedStatement preStat;

    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/chipdata?createDatabaseIfNotExist=true&useSSL=false";
        try {
            con = DriverManager.getConnection(url);
            MidTopChart();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public static void MidTopChart() {
        Random random = new Random();
        String sql = "update dynamicdate set production = ? where id = ?";
        try {
            preStat = con.prepareStatement(sql);
            int basic = 10000;
            for (int i = 0; i < 400; i++) {
                int add = random.nextInt(25)+40;
                basic += add;
                preStat.setInt(1, basic);
                preStat.setInt(2, i+1);
                preStat.addBatch();
            }
            preStat.executeBatch();
//            con.commit();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
