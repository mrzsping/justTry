package cn.ja.oo2;

import cn.ja.oo.Man;

public class TestClose {
    public static void main(String[] args) {
        Girl m = new Girl();
        m.say();
    }
}
class Girl extends Man{
    public void say(){
        System.out.println(height);
    }
}
