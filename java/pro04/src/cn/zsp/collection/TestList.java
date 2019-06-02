package cn.zsp.collection;

import java.util.ArrayList;
import java.util.Collection;

// 测试collection中的方法
public class TestList {
    public static void main(String[] args) {
        Collection<String> c = new ArrayList<>();
        System.out.println(c.size());
        System.out.println(c.isEmpty());
        c.add("a");
        c.add("b");
        c.remove("a");// 从容器中移除，删除地址
        System.out.println(c);
        System.out.println(c.contains("c"));

    }
}
