package cn.ja.oo;
public class TextOverride {
    public static void main(String[] args) {
        Horse h = new Horse();
        h.run();
    }
}
class V{
    void run(){
        System.out.println("跑");
    }
    public void stop(){
        System.out.println("停止");
    }
}
class Horse extends V{
    public void run(){
        System.out.println("奔跑");
    }
}
