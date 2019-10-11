import java.sql.Struct;
import java.util.Scanner;
public class TestScanner {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入名字");
        String name = sc.nextLine();
        System.out.println("请输入爱好");
        String fav = sc.nextLine();
        System.out.println("请输入年龄");
        int age = sc.nextInt();
        System.out.println(name+":"+fav+":"+age);
    }
}
