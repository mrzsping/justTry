package cn.zsp.test;

import java.io.FileReader;
import java.io.IOException;

public class TestThrows {
    public static void main(String[] args) throws IOException {
        readMyFile();
    }
    public static void readMyFile() throws IOException{
        FileReader reader = null;
            reader = new FileReader("F:\\justTry\\java\\pro03\\3.txt");
            char c1 = (char)reader.read();
            System.out.println(c1);
            if(reader != null){
                reader.close();
            }
        }
}
