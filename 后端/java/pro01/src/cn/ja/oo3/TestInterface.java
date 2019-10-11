package cn.ja.oo3;

public class TestInterface {
    public static void main(String[] args) {
        Man r = new Man();
        r.see();
    }
}
interface Run{
    int SPEED = 10;
    void run();
}
interface Speak{
    void loud();
}
interface Person extends Speak,Run{
    void see();
}
class Man implements Person{
    @Override
    public void see() {
        System.out.println("see");
    }

    @Override
    public void run() {
        System.out.println("run");
    }

    @Override
    public void loud() {
        System.out.println("speak");
    }
}
class Dog implements Run{
    @Override
    public void run() {
        System.out.println("run");
    }
}
