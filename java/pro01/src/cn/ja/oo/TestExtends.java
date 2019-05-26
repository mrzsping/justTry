package cn.ja.oo;

public class TestExtends {

    public static void main(String[] args) {
        Student s  = new Student(1, "xiaomign", "化学");
       s.set();
    }
}
class Person{
    String name;
    int id;
    void set(){
        System.out.println(name);
    }
}
class Student extends Person{
    String major;
    public Student(int id, String name, String major){
        this.id = id;
        this.major = major;
        this.name = name;
    }
}
