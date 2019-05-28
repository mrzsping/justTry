package cn.zsp.test;

public class TestWrapperClass {
    public static void main(String[] args) {
        //基本数据转静态类
        Integer a = new Integer(2);
        Integer b = Integer.valueOf(10);
        // 包装类转基本
        int c = b.intValue();
        //字符串转包装类
        Integer f = new Integer("99999");
        Integer e = Integer.parseInt("9999");
        //包装类转字符串
        String str = f.toString();
        //自动装箱与拆箱
        //自动装箱与拆箱
        Integer v = 123;
        int g = v;
        //缓存[-128-127]
        Integer in1 = 1234;
        Integer in2 = 1234;
        System.out.println(in1 == in2);//false
        System.out.println(in1.equals(in2));
        //缓存-128---127之间的数字,如果在这个范围内，直接使用，如果不在则创建新的对象
        Integer in3 = -128;
        Integer in4 = -128;
        System.out.println(in3 == in4);//true
        System.out.println(in3.equals(in4));
    }
}