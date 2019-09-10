package cn.ja.oo2;
// 测试多态
public class TestPoly {
    public static void main(String[] args) {
    Person p = new Person();
    Voice(p);
    Man m = new Man(); // 父类引用
    Voice(m);
    Person w = new Women(); // 转型
        Voice(w);
    }
    static void Voice(Person p){
        p.say();
    }
}
class Person{
    public void say(){
        System.out.println("你好");
    }
}
class Man extends Person{ // 继承
    public void say(){ // 方法重写
        System.out.println("man,你好");
    }
}
class Women extends Person{
    public void say(){
        System.out.println("women,你好");
    }
}
