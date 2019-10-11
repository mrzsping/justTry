package cn.ja.oo3;

public class TestInnerClass {
    public static void main(String[] args) {
        Out.Inner inner = new Out().new Inner();
        inner.show();
    }
}
class Out{
    private int a = 123;
    public void outer(){
        System.out.println("outer");
    }
    /* static:静态 */ class Inner{
        int b = 123;
        public void show(){
            System.out.println("外部"+Out.this.a);
            System.out.println("内部"+this.b);
        }
    }
}
