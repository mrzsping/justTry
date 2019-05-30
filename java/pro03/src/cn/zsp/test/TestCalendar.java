package cn.zsp.test;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.Scanner;

public class TestCalendar {
    public static void main(String[] args) {
        System.out.println("请输入日期:");
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
        try {
            Date date = df.parse(str);
            Calendar c = new GregorianCalendar();
            c.setTime(date);
            int day = c.get(Calendar.DAY_OF_MONTH);
            System.out.println("日\t一\t二\t三\t四\t五\t六");
            c.set(Calendar.DAY_OF_MONTH, 1);
            for(int i = 0;i < c.get(Calendar.DAY_OF_WEEK) - 1; i++){
                System.out.print("\t");
            }
            int max = c.getActualMaximum(Calendar.DATE);
            for(int i = 1; i <= max; i++){
                if (day == c.get(Calendar.DAY_OF_MONTH)) {
                    System.out.print(c.get(Calendar.DAY_OF_MONTH) + "*\t");
                }else{
                    System.out.print(c.get(Calendar.DAY_OF_MONTH) + "\t");
                }
                if(c.get(Calendar.DAY_OF_WEEK) == Calendar.SATURDAY){
                    System.out.println();
                }
                c.add(Calendar.DAY_OF_MONTH, 1);
            }
        }catch (ParseException e){

        }
    }
}
