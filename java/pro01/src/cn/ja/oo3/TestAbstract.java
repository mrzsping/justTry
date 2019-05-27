package cn.ja.oo3;

public abstract class TestAbstract {
    public static void main(String[] args) {

    }
    public abstract void run();
    public void voice(){
        System.out.println("叫");
    }
}
class People extends TestAbstract{
    @Override
    public void run() {
        System.out.println("这是必须实现的");
    }
}

