package cn.zsp.collection;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

// 测试collection中的方法
public class TestList {
    public static void main(String[] args) {
//        Collection<String> c = new ArrayList<>();
//        System.out.println(c.size());
//        System.out.println(c.isEmpty());
//        c.add("a");
//        c.add("b");
//        c.remove("a");// 从容器中移除，删除地址
//        System.out.println(c);
//        System.out.println(c.contains("c"));

        test();

    }

    public static void test(){
        List<String> l = new ArrayList<>();
        l.add("1");
        l.add("2");
        l.add(2,"3");
        System.out.println(l);
        l.remove(1);
        l.set(0,"1111");
        System.out.println(l);
    }

}