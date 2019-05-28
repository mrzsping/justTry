package cn.zsp.test;

public class TestString {

    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("12345");
        StringBuffer sf = new StringBuffer();
        sb.setCharAt(1,'m');
        System.out.println(sb);
    }


}
