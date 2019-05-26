package cn.ja.oo;

import java.util.Objects;

public class TestObject {
    public static void main(String[] args) {
        TestObject to = new TestObject();
        User u1 = new User(1,"xiaoming", "321");
        User u2 = new User(1,"xiaoming", "123");
        System.out.println(u1.equals(u2));
    }
    public String toString(){
        return "重写toString";
    }
}

class User{
    int id;
    String name;
    String pwd;
    public User(int id, String name, String pwd) {
        this.id = id;
        this.name = name;
        this.pwd = pwd;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return id == user.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
