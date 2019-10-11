package cn.zsp.test;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class TestDate {
    public static void main(String[] args) {
        DateFormat f = new SimpleDateFormat("yyyy-MM-dd");
        String t = f.format(new Date());
        DateFormat f2 = new SimpleDateFormat("yyyy年MM月dd日");
        try {
            Date t2 = f2.parse("2019年05月29日");
            System.out.println(t2);
        }catch (ParseException e){
        }
    }
}
