public class TestMethod {
    public static void main(String[] args) {
        int a = add(1,2);
        System.out.println(a);
    }
    public static int add(int a , int b){
            return a + b;
    }
    public static int add(int a , int b, int c){
        return a + b + c;
    }
}
