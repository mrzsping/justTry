    public class SxtStu { //对象创建，调用构造方法，创建类的对象，无参则自动创建，构造方法与类名一致
    int id;
    String name;
    int age;
    Computer comp;

    void study(){
        System.out.println("我在认真学习" + comp.grand);
    }
    void play(){
        System.out.println("我在玩游戏");
    }

    public static void main(String[] args) {
        SxtStu ss = new SxtStu();
        ss.id = 1;
        ss.name = "夏明";
        ss.age = 1;
        Computer c1 = new Computer();
        c1.grand = "huawei";
        ss.comp = c1;
        ss.study();
    }
}
class Computer{
    String grand;
}