package cn.ja.oo3;

public class TestStaticInnerClass {
    public static void main(String[] args) {
        Out2.Inner i = new Out2.Inner();
        i.run();
    }
}

class Out2{
    static class Inner{
         void run(){
            System.out.println("inner");
        }
    }
}
