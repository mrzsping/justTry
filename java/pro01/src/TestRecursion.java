public class TestRecursion {
    public static void main(String[] args) {
        System.out.println(jcc(10));
    }
    static int count = 0;
    static void a(){ // 循环输出
        System.out.println(count);
        count++;
        if(count<10){
            a();
        }else{
            return;
        }
    }
    // 阶乘
    static long jc(int n){
        if(n == 1){
            return 1;
        }else{
            return n*jc(n-1);
        }
    }
    static long jcc(int n){
        long s= 1;
        while (n>1){
            s*= n;
            n--;
        }
        return s;
    }
}
