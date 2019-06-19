package cn.zsp.collection;

import java.util.HashMap;
import java.util.Map;

public class TestMap {
    public static void main(String[] args) {
        Map<Integer,String> m = new HashMap<>();

        m.put(1,"one");
        m.put(2,"two");
        System.out.println(m.get(1));
    }
}
