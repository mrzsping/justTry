package cn.ja.oo3;

public interface MyInterafce {
    int a = 123;
    void run();
}
class MyClass implements MyInterafce{
    @Override
    public void run() {
        System.out.println("run");
    }
}