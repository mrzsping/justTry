package cn.zsp.test;

public class TestException {
    public static void main(String[] args) {
        try{
            int a = 1/0;
            System.out.println(a);
        }catch (ArithmeticException e){
            System.out.println(e);
        }
    }
}
