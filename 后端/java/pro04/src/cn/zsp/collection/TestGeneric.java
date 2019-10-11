package cn.zsp.collection;
// 测试泛型

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

// List<Sring> lsit = new List<String>();
public class TestGeneric {
    public static void main(String[] args) {
        MyCollection<String> m = new MyCollection<String>();
        m.set("小曾", 1);
        String s = m.get(1);

        List lsit = new ArrayList();
    }
}

class MyCollection<E>{
    Object [] objs = new Object[5];
    public void set(E e, int index){
        objs[index] = e;
    }
        public E get(int index){
        return (E)objs[index];
    }
}