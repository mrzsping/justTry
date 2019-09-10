package cn.ja.str;

public class TestString {
    public static void main(String[] args) {
        int []a = {1,2,3,4};
        int []b = new int[2];
        System.arraycopy(a,2,b,0,2);
        for(int j = 0;j<b.length;j++){
            System.out.println(b[j]);
        }
    }
}
