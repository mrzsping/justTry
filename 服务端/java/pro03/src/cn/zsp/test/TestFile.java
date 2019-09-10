package cn.zsp.test;
import java.io.File;
import java.io.IOException;

public class TestFile {
    public static void main(String[] args) throws IOException {
        File f = new File("F:\\justTry\\java\\2.常用类\\1.txt");
        f.renameTo(new File("F:\\justTry\\java\\2.常用类\\2.txt"));
        System.out.println(System.getProperty("user.dir"));
        File f2 = new File("3.txt");
        f2.createNewFile();


    }
}
