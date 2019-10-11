package cn.zsp.test;

import java.util.Random;

public class TestRandom {
    public static Random r = new Random();
    public static void main(String[] args) {
        System.out.println(r.nextDouble());
        System.out.println(r.nextInt(10));
    }
}
