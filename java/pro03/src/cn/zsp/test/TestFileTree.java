package cn.zsp.test;

import java.io.File;

// 使用递归算法打印目录树
public class TestFileTree {
    public static void main(String[] args) {
        File f = new File("C:\\Users\\mrzsping\\Desktop\\java");

        printFile(f, 0);
    }
    static void printFile(File file,int level){
        for(int i = 0; i < level; i++){
            System.out.print("-");
        }
        System.out.println(file.getName());
        if(file.isDirectory()){
            File []files = file.listFiles();
            for(File temp:files){
                printFile(temp, level + 1);
            }
        }
    }
}
