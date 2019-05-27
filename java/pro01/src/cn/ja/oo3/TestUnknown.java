package cn.ja.oo3;

public class TestUnknown {
    public static void test(A a){
        a.a();
    }

    public static void main(String[] args) {
        TestUnknown.test(new A(){
            @Override
            public void a() {
                System.out.println("测试");
            }
        });
    }
}
interface A{
    void a();
}


