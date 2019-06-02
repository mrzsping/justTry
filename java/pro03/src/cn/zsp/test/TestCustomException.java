package cn.zsp.test;

public class TestCustomException {
    public static void main(String[] args) {
    Person p = new Person();
    p.setAge(-12);
    p.getAge();
    }
}
class Person{
    private int age;

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        if(age < 0){
            throw new IllegeAge("为负数");
        }
        this.age = age;
    }
}
class IllegeAge extends RuntimeException{
    public IllegeAge(String msg){
        super(msg);
    }
}
