package cn.zsp.collection;

import java.util.HashMap;
import java.util.Map;

public class TestMap2 {
    public static void main(String[] args) {
        Employee e1 = new Employee(1,"xiaoming", 12000);
        Employee e2 = new Employee(2,"xiaohong", 12000);
        Employee e3 = new Employee(3,"xiaolan", 12000);

        Map<Integer, Employee> m = new HashMap<>();
        m.put(0,e1);
        m.put(1,e2);
        m.put(2,e3);
        System.out.println(m.get(0).getName());
    }
}
class Employee {
    private int id;
    private String name;
    private double slary;
    public Employee(int id, String name, double slary) {
        this.id = id;
        this.name = name;
        this.slary = slary;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getSlary() {
        return slary;
    }

    public void setSlary(double slary) {
        this.slary = slary;
    }
    public String toString(){
        return "name:"+ name;
    }
}
