package cn.ja.oo;

public class TestSuper2 {
    public static void main(String[] args) {
        ChildClass2 c = new ChildClass2();
        System.out.println("结束");
    }
}
class FatherClass2{
    public FatherClass2() {
        System.out.println("FatherClass2");
    }
}
class ChildClass2 extends FatherClass2{
    public ChildClass2() {
        System.out.println("ChildClass2");
    }
}
