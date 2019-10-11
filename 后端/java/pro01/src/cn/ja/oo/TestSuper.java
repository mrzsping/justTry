package cn.ja.oo;

public class TestSuper {
    public static void main(String[] args) {
        ChildClass c = new ChildClass();
        c.f();
    }
}
class FatherClass{
    public int value;
    public void f(){
        value = 123;
        System.out.println("f"+value);
    }
}
class ChildClass extends FatherClass{
    public int value;
    public void f(){
        super.f();
        value = 200;
        System.out.println(value);
        System.out.println("f2"+super.value);
    }
}