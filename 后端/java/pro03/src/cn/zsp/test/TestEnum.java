package cn.zsp.test;

public class TestEnum {
    public static void main(String[] args) {
        System.out.println(Season.AUTUMN);
        Season a = Season.AUTUMN;

        switch (a){
            case SPRING:
                System.out.println("春天");
                break;
            case AUTUMN:
                System.out.println("秋天");
        }
    }
}
enum Season{
    SPRING, SUMMER, AUTUMN, WINTER
}
